package world.braveart.aws.forms.contact

//world.braveart.aws.forms.contact.PostContactLambdaService::handleRequest
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.github.kittinunf.result.Result
import io.swagger.client.models.CardResult
import io.swagger.client.models.Cards
import kotlinx.coroutines.runBlocking
import world.braveart.common.content.BraveArtColors
import world.braveart.slack.customerservice.SlackCustomerServiceChannelMessaging
import world.braveart.slack.webhook.Attachment
import world.braveart.slack.webhook.Fields
import world.braveart.slack.webhook.WebHook
import world.braveart.trello.TrelloCardAPI
import world.braveart.trello.common.config.TrelloProps
import java.io.ByteArrayOutputStream
import java.io.InputStream
import java.io.OutputStream
import java.time.LocalDateTime
import java.time.ZoneOffset
//import kotlin.result as kotResult

@JsonIgnoreProperties(ignoreUnknown = true)
data class ContactForm(
        val contactName: String ="",
        val contactEmail: String ="",
        val contactMessage: String = ""
)

data class HandlerOutput(val message: String)

const val SLACK_CHANNEL_URL = "https://brave-art.slack.com/messages/GK1PG0CM8"

const val TRELLO_AXE_CUSTOMER_SERVICE_BOARD = "https://trello.com/b/5GCOL8tr/customer-service"

const val CONTACT_CHANNEL = "braveart.world/contact"

object PostContactLambdaService : RequestHandler<ContactForm, Any> {
    override fun handleRequest(p0: ContactForm?, p1: Context?): Any {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    private val mapper = jacksonObjectMapper()

    fun handler(input: InputStream, output: OutputStream = ByteArrayOutputStream()): Unit {

        val contact = mapper.readValue<ContactForm>(input)

        val ticketDateTime = LocalDateTime.now()

        val ticketName = "Contact-Request:$CONTACT_CHANNEL[$ticketDateTime]"


        val trelloCardResult = Result.of<CardResult,Exception> {
                TrelloCardAPI
                    .addCardToTrelloList(
                            cardName = ticketName,
                            cardDesc =
                            """#Contact Form
                            |[Axe Throwing Customer Service Slack Channel]($SLACK_CHANNEL_URL)
                            |##Contact name
                            |${contact.contactName.take(250)}
                            |
                            |##Contact Email
                            |${contact.contactEmail.take(250)}
                            |
                            |##Message
                            |${contact.contactMessage.take(10000)} // actual limit was 16384 at some point in time
                        """.trimMargin(),
                            dueDate = ticketDateTime.toLocalDate(),
                            boardId = TrelloProps[TrelloProps.AxeCustomerServiceBoard.board_id],
                            listId = TrelloProps[TrelloProps.AxeCustomerServiceBoard.IncomingList.list_id]
                    )
        }


        runBlocking {
            SlackCustomerServiceChannelMessaging
                    .sendMessageToCustomerServiceChannel(
                            webHook =  WebHook(
                                text = ticketName,
                                attachments = arrayOf(
                                    Attachment(
                                            fallback = "Attachment for ticket $ticketName",
                                            color = BraveArtColors.DefaultPrimaryColor.color,
                                            pretext = "Customer has submitted a request for contact",
                                            author_name = "Name: ${contact.contactName.take(100)}",
                                            author_link = """mailto:${contact.contactEmail}?subject=Brave Art Customer Service&body=Thank you for contacting Brave Art Adventures!
                                                |
                                                |
                                                |Original Message:
                                                |"${contact.contactMessage.take(3000)}
                                                |...
                                                |
                                                |Customer Service
                                                |Brave Art Adventures LLC
                                                |customer.support@braveart.email
                                                |(517) 292-6061
                                                |"
                                            """.trimMargin(),
//                                            author_icon = "http://flickr.com/icons/bobby.jpg",
                                            title = "Trello Ticket: $ticketName",
                                            title_link = trelloCardResult.get().shortUrl ?: TRELLO_AXE_CUSTOMER_SERVICE_BOARD,
                                            text = contact.contactMessage.take(3000),
                                            fields = arrayOf(
                                                    Fields(
                                                            title = "Priority",
                                                            value = "High",
                                                            short = false
                                                    )
                                            ),
//                                            image_url = "http://my-website.com/path/to/image.jpg",
//                                            thumb_url = "http://example.com/path/to/thumb.png",
                                            footer = "Brave Art Adventures Customer Service",
//                                            footer_icon = "https://platform.slack-edge.com/img/default_application_icon.png",
                                            ts = ticketDateTime.toEpochSecond(ZoneOffset.UTC)
                                    )
                                )
                            )
                    )
        }

//        mapper.writeValue(output, HandlerOutput(
//                """...Echo... Hello ${inputObj.contactName},
//                    |We will contact you by email at: ${inputObj.contactEmail} in regards to your message:
//                    |${inputObj.contactMessage}
//                """.trimMargin()))
    }
}
