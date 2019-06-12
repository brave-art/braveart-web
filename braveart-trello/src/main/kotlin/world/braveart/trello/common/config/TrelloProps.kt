package world.braveart.trello.common.config

import com.natpryce.konfig.PropertyGroup
import com.natpryce.konfig.getValue
import com.natpryce.konfig.stringType
import world.braveart.common.config.AbstractConfig


object TrelloProps: AbstractConfig() {

    object Api: PropertyGroup() {

        val key by stringType

        val token by stringType
    }

    object AxeCustomerServiceBoard: PropertyGroup() {
        val board_id by stringType

        object IncomingList: AbstractConfig() {
            val list_id by stringType
        }

    }
}


