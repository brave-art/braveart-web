package world.braveart.trello.boards.snapshots

import org.junit.jupiter.api.Test
import kotlin.test.assertTrue

class AxeCustomerServiceBoardTest {

    @Test
    fun getBoard() {
        assertTrue { (AxeCustomerServiceBoard.board.lists?.size == 4)}

        assertTrue {AxeCustomerServiceBoard.getListByName("Incoming")?.id
                .equals("5cfb33a751ec3f3d0020ff12")}
    }
}
