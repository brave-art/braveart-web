package world.braveart.slack.customerservice

import com.natpryce.konfig.*
import com.natpryce.konfig.ConfigurationProperties.Companion.systemProperties
import world.braveart.common.config.AbstractConfig
import java.io.File


object TrelloProperties: AbstractConfig() {

    val slack_cs_webhook by uriType
}
