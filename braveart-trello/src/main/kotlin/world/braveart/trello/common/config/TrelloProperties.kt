package world.braveart.trello.common.config

import com.natpryce.konfig.*
import com.natpryce.konfig.ConfigurationProperties.Companion.systemProperties
import world.braveart.common.config.AbstractConfig
import java.io.File


object TrelloProperties: AbstractConfig() {

    val trello_api_key by stringType
    val trello_api_token by stringType
}


