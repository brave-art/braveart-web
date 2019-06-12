package world.braveart.common.config

import com.natpryce.konfig.getValue
import com.natpryce.konfig.stringType
import org.junit.jupiter.api.Test

import kotlin.test.assertEquals
import kotlin.test.assertTrue

class AbstractConfigTest {

    companion object {

        object TestConfig: AbstractConfig() {

            val test_val by stringType

            object Api: AbstractConfig() {
                val api_val by stringType
            }
        }
    }

    @Test
    fun getBasicProps() {

        val testValue = "myTestValue"

        System.setProperty("TestConfig.test-val",testValue)

        assertEquals(
            expected = testValue,
            actual = TestConfig[TestConfig.test_val]
        )

    }

    @Test
    fun getMultilevelProps() {

        val testValue = "myTestValue"

        System.setProperty("TestConfig.Api.api-val",testValue)

        assertEquals(
            expected = testValue,
            actual = TestConfig[TestConfig.Api.api_val]
        )

    }

    @Test
    fun getBasicPropsFromResource() {

        assertEquals(
            expected = "TestConfigFileTestValue",
            actual = TestConfig[TestConfig.test_val]
        )

    }

    @Test
    fun getMultilevelPropsFromResource() {

        assertEquals(
            expected = "ApiFileTestValue",
            actual = TestConfig[TestConfig.Api.api_val]
        )
    }

    @Test
    fun getOverrideFile() {

        assertTrue(AbstractConfig.overrideFile.endsWith(OVERRIDE_PATH))
    }
}
