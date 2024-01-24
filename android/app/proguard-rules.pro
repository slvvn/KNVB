# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

-keep class com.swmansion.reanimated.** { *; }
-keep class com.shopify.reactnative.skia.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
# Theoplayer
-dontwarn com.theoplayer.android.api.ads.dai.GoogleDaiIntegration
-dontwarn com.theoplayer.android.api.ads.ima.GoogleImaAdBreak
-dontwarn com.theoplayer.android.api.ads.ima.GoogleImaAdEvent
-dontwarn com.theoplayer.android.api.ads.ima.GoogleImaAdEventType
-dontwarn com.theoplayer.android.api.ads.ima.GoogleImaIntegration
-dontwarn java.beans.**
-dontwarn javax.lang.**
-dontwarn javax.naming.**
-dontwarn javax.tools.**