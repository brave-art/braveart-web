package world.braveart.trello

import io.swagger.client.apis.CardApi
import io.swagger.client.models.CardResult
import io.swagger.client.models.Cards
import world.braveart.trello.common.config.TrelloProps
import java.time.LocalDate

object TrelloCardAPI {

    fun addCardToTrelloList(boardId: String, listId: String, cardName: String,
                                    cardDesc: String = "", dueDate: LocalDate?,
                                    position: String = "bottom"):CardResult {

        return CardApi().addCards(
                key = TrelloProps[TrelloProps.Api.key],
                token = TrelloProps[TrelloProps.Api.token],
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
}



