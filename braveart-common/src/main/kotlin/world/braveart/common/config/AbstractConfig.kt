package world.braveart.common.config

import com.natpryce.konfig.*
import com.natpryce.konfig.ConfigurationProperties.Companion.systemProperties
import world.braveart.common.util.getRootFromCurrentDirector
import java.io.File

//const val OVERRIDE_FILE = "../../override.properties"
const val OVERRIDE_PATH = "props/braveart-web/override.properties"
//const val DEFAULT_RESOURCE_FILE = "default.properties"

open class AbstractConfig: PropertyGroup(),
    Configuration by
        systemProperties() overriding
        EnvironmentVariables() overriding
        ConfigurationProperties.fromOptionalFile(overrideFile)
{
    /*
        Define properties as such when implementing:

            val trello_api_key by stringType
            val trello_api_token by stringType
     */
    companion object {

//        @JvmStatic
        val overrideFile by lazy<File> {

            getRootFromCurrentDirector()
                    .resolve(OVERRIDE_PATH)
                    .toFile()
        }

//        @JvmStatic
//        val props =
//            systemProperties() overriding
//            EnvironmentVariables() overriding
//            ConfigurationProperties.fromOptionalFile(overrideFile) //overriding
//            //ConfigurationProperties.fromResource(DEFAULT_RESOURCE_FILE)
    }
}


