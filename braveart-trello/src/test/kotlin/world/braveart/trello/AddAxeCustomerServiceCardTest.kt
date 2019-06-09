package world.braveart.trello

import org.junit.jupiter.api.Test
import kotlin.system.measureTimeMillis
import kotlin.test.Ignore

class AddAxeCustomerServiceCardTest {

    @Test @Ignore
    fun addCustomerServiceCard() {

        val milliseconds = measureTimeMillis {
            AddCardToTrelloBoard.addAxeThrowingCustomerServiceCard(cardName = "test",
                    apiKey = "",apiToken = "")
        }

        print(milliseconds)

    }
}