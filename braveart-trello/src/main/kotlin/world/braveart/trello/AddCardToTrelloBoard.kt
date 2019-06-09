package world.braveart.trello

import io.swagger.client.apis.CardApi
import io.swagger.client.models.Cards
import world.braveart.trello.boards.snapshots.AxeCustomerServiceBoard
import world.braveart.trello.common.config.TrelloProperties
import java.time.LocalDate

import world.braveart.common.config.AbstractConfig.Companion.config

object AddCardToTrelloBoard {

    private fun addCardToList(boardId: String, listId: String, cardName: String,
                                cardDesc: String = "",
                                dueDate: LocalDate?, position: String = "bottom"): Cards {

        return  CardApi().addCards(
                key = config[TrelloProperties.trello_api_key],
                token = config[TrelloProperties.trello_api_token],
            body = Cards(
                    name = cardName,
                    desc = cardDesc,
                    due = LocalDate.now().toString(),
                    idBoard = boardId,
                    idList = listId,
                    pos = position
            )
        )
    }

    fun addAxeThrowingCustomerServiceCard(
                               cardName: String, cardDesc: String = "",
                               dueDate: LocalDate = LocalDate.now(),
                                          position: String = "bottom"): Cards {

        return addCardToList(
                cardName = cardName, cardDesc = cardDesc, dueDate = dueDate,
                position = position, boardId = AxeCustomerServiceBoard.board.id ?:
                    throw IllegalArgumentException("boardId is required"),
        listId = AxeCustomerServiceBoard.getListByName("Incoming")?.id ?:
                    throw IllegalArgumentException("listId is required"))
    }
}



