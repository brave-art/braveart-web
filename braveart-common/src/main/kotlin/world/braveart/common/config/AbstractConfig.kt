package world.braveart.common.config

import com.natpryce.konfig.*
import com.natpryce.konfig.ConfigurationProperties.Companion.systemProperties
import java.io.File

const val OVERRIDE_FILE = "../../override.properties"
const val DEFAULT_RESOURCE_FILE = "../../override.properties"

abstract class AbstractConfig {

    /*
        Define properties as such when implementing:
            val trello_api_key by stringType
            val trello_api_token by stringType
     */
    companion object {
        @JvmStatic
        val config =
                systemProperties() overriding
                        EnvironmentVariables() overriding
                        ConfigurationProperties.fromFile(File(OVERRIDE_FILE)) overriding
                        ConfigurationProperties.fromResource(DEFAULT_RESOURCE_FILE)
    }

}


