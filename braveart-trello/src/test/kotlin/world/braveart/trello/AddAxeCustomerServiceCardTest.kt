package world.braveart.trello

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.junit.jupiter.api.Test
import world.braveart.trello.common.config.TrelloProps
import java.time.LocalDate
import kotlin.system.measureTimeMillis
import kotlin.test.Ignore

class AddAxeCustomerServiceCardTest {

    @Test //@Ignore
    fun addCustomerServiceCard() {
//
        val milliseconds = measureTimeMillis {
            println (
//                    jacksonObjectMapper().readValue<TrelloCard>(
            TrelloCardAPI
                    .addCardToTrelloList(
                            cardName = "test ticket", cardDesc =
                            """#Contact Form
                            |[Axe Throwing Customer Service Slack Channel](https://www.google.com)
                            |##Contact name
                            |My Contact Name
                            |
                            |##Contact Email
                            |My Contact Email
                            |
                            |##Message
                            |My Contact Message
                        """.trimMargin(),
                            dueDate = LocalDate.now(),
                            boardId = TrelloProps[TrelloProps.AxeCustomerServiceBoard.board_id],
                            listId = TrelloProps[TrelloProps.AxeCustomerServiceBoard.IncomingList.list_id]
                    ).toString()
//                )
            )
        }

        println(milliseconds)

    }

//    @Test
//    fun
}