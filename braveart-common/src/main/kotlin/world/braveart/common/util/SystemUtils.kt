package world.braveart.common.util

import world.braveart.common.config.OVERRIDE_PATH
import java.io.File
import java.nio.file.Path


fun printAllSystemProperties() {
    System.getProperties().forEach { t, u -> println("key:$t value: $u")  }
}

fun getRootFromCurrentDirector(): Path =
        File(System.getProperty("user.dir"))
                .resolve(OVERRIDE_PATH)
                .toPath()
                .root


//fun getParentFolderNameFromCurrentDirectory(): Path =
//        File(System.getProperty("user.dir"))
//                .resolve(OVERRIDE_PATH)
//                .toPath()
//                .root

