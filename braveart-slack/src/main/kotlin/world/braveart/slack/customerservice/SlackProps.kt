package world.braveart.slack.customerservice

import com.natpryce.konfig.getValue
import com.natpryce.konfig.uriType
import world.braveart.common.config.AbstractConfig


object SlackProps: AbstractConfig() {

    object AxeCostumerService: AbstractConfig() {
        val webhook by uriType
    }
}
