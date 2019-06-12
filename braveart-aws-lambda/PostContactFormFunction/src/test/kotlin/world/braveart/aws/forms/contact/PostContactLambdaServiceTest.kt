package world.braveart.aws.forms.contact

import jdk.nashorn.internal.ir.annotations.Ignore
import org.apache.commons.io.IOUtils

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import world.braveart.slack.customerservice.SlackProps
import world.braveart.trello.common.config.TrelloProps
import java.io.ByteArrayOutputStream
import kotlin.system.measureTimeMillis

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class PostContactLambdaServiceTest {

//    val testService = PostContactLambdaService();

    private val encoding = "UTF-8"

    @Test
    fun testUnknownClassesDoNotCauseFailure() {

        val out = ByteArrayOutputStream();

        PostContactLambdaService.handler(input = IOUtils.toInputStream(
                """{  "key1": "value1","key2": "value2","key3": "value3"}""",encoding),
                output = out
        )

        print(out)
    }


    @Test
    fun testAllPropertiesAreAvailable() {

        println(TrelloProps[TrelloProps.Api.token])
        println(TrelloProps[TrelloProps.Api.key])

        println(SlackProps[SlackProps.AxeCostumerService.webhook])
        println(TrelloProps[TrelloProps.AxeCustomerServiceBoard.board_id])
        println(TrelloProps[TrelloProps.AxeCustomerServiceBoard.IncomingList.list_id])

    }

    @Test //@Ignore
    fun testFullIntegrationWithSlackAndTrello() {

        val out = ByteArrayOutputStream();

        repeat(5) {
            val milliseconds = measureTimeMillis {
                PostContactLambdaService.handler(input = IOUtils.toInputStream(
                        """{"contactName": "Grimly","contactEmail": "MyAxe@Mordor.MiddleEarth","contactMessage": "I had a BRILLIANT idea! I would like to propose that we rent your axe throwing lanes to train an army that can invade Mordor!"}""",
                        encoding),
                        output = out
                )
            }
            println(milliseconds)
        }
    }


}