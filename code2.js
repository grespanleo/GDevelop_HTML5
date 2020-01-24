gdjs.RewardVideosCode = {};
gdjs.RewardVideosCode.GDPlayerObjects1= [];
gdjs.RewardVideosCode.GDPlayerObjects2= [];
gdjs.RewardVideosCode.GDPlayerObjects3= [];
gdjs.RewardVideosCode.GDDebugTextObjects1= [];
gdjs.RewardVideosCode.GDDebugTextObjects2= [];
gdjs.RewardVideosCode.GDDebugTextObjects3= [];
gdjs.RewardVideosCode.GDLoadObjects1= [];
gdjs.RewardVideosCode.GDLoadObjects2= [];
gdjs.RewardVideosCode.GDLoadObjects3= [];
gdjs.RewardVideosCode.GDDisplayObjects1= [];
gdjs.RewardVideosCode.GDDisplayObjects2= [];
gdjs.RewardVideosCode.GDDisplayObjects3= [];
gdjs.RewardVideosCode.GDLoadAndDisplayObjects1= [];
gdjs.RewardVideosCode.GDLoadAndDisplayObjects2= [];
gdjs.RewardVideosCode.GDLoadAndDisplayObjects3= [];
gdjs.RewardVideosCode.GDClaimRewardObjects1= [];
gdjs.RewardVideosCode.GDClaimRewardObjects2= [];
gdjs.RewardVideosCode.GDClaimRewardObjects3= [];
gdjs.RewardVideosCode.GDTitleObjects1= [];
gdjs.RewardVideosCode.GDTitleObjects2= [];
gdjs.RewardVideosCode.GDTitleObjects3= [];
gdjs.RewardVideosCode.GDButtonTextObjects1= [];
gdjs.RewardVideosCode.GDButtonTextObjects2= [];
gdjs.RewardVideosCode.GDButtonTextObjects3= [];
gdjs.RewardVideosCode.GDGoToBannersObjects1= [];
gdjs.RewardVideosCode.GDGoToBannersObjects2= [];
gdjs.RewardVideosCode.GDGoToBannersObjects3= [];
gdjs.RewardVideosCode.GDGoToInterstitialsObjects1= [];
gdjs.RewardVideosCode.GDGoToInterstitialsObjects2= [];
gdjs.RewardVideosCode.GDGoToInterstitialsObjects3= [];

gdjs.RewardVideosCode.conditionTrue_0 = {val:false};
gdjs.RewardVideosCode.condition0IsTrue_0 = {val:false};
gdjs.RewardVideosCode.condition1IsTrue_0 = {val:false};
gdjs.RewardVideosCode.condition2IsTrue_0 = {val:false};
gdjs.RewardVideosCode.conditionTrue_1 = {val:false};
gdjs.RewardVideosCode.condition0IsTrue_1 = {val:false};
gdjs.RewardVideosCode.condition1IsTrue_1 = {val:false};
gdjs.RewardVideosCode.condition2IsTrue_1 = {val:false};


gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadObjects2Objects = Hashtable.newFrom({"Load": gdjs.RewardVideosCode.GDLoadObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDDisplayObjects2Objects = Hashtable.newFrom({"Display": gdjs.RewardVideosCode.GDDisplayObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadAndDisplayObjects2Objects = Hashtable.newFrom({"LoadAndDisplay": gdjs.RewardVideosCode.GDLoadAndDisplayObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDClaimRewardObjects2Objects = Hashtable.newFrom({"ClaimReward": gdjs.RewardVideosCode.GDClaimRewardObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToBannersObjects2Objects = Hashtable.newFrom({"GoToBanners": gdjs.RewardVideosCode.GDGoToBannersObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects1Objects = Hashtable.newFrom({"ButtonText": gdjs.RewardVideosCode.GDButtonTextObjects1});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToInterstitialsObjects1Objects = Hashtable.newFrom({"GoToInterstitials": gdjs.RewardVideosCode.GDGoToInterstitialsObjects1});gdjs.RewardVideosCode.eventsList0x784f9c = function(runtimeScene) {

{

gdjs.RewardVideosCode.GDButtonTextObjects2.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDLoadObjects2.createFrom(runtimeScene.getObjects("Load"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadObjects2Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects2 */
/* Reuse gdjs.RewardVideosCode.GDLoadObjects2 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setString("Load");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setPosition((( gdjs.RewardVideosCode.GDLoadObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDLoadObjects2[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDLoadObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDLoadObjects2[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.RewardVideosCode.GDButtonTextObjects2.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDDisplayObjects2.createFrom(runtimeScene.getObjects("Display"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDDisplayObjects2Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects2 */
/* Reuse gdjs.RewardVideosCode.GDDisplayObjects2 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setString("Display");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setPosition((( gdjs.RewardVideosCode.GDDisplayObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDDisplayObjects2[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDDisplayObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDDisplayObjects2[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.RewardVideosCode.GDButtonTextObjects2.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDLoadAndDisplayObjects2.createFrom(runtimeScene.getObjects("LoadAndDisplay"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadAndDisplayObjects2Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects2 */
/* Reuse gdjs.RewardVideosCode.GDLoadAndDisplayObjects2 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setString("Load & Display");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setPosition((( gdjs.RewardVideosCode.GDLoadAndDisplayObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDLoadAndDisplayObjects2[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDLoadAndDisplayObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDLoadAndDisplayObjects2[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.RewardVideosCode.GDButtonTextObjects2.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDClaimRewardObjects2.createFrom(runtimeScene.getObjects("ClaimReward"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDClaimRewardObjects2Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects2 */
/* Reuse gdjs.RewardVideosCode.GDClaimRewardObjects2 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setString("Claim Reward!");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setPosition((( gdjs.RewardVideosCode.GDClaimRewardObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDClaimRewardObjects2[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDClaimRewardObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDClaimRewardObjects2[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.RewardVideosCode.GDButtonTextObjects2.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDGoToBannersObjects2.createFrom(runtimeScene.getObjects("GoToBanners"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects2Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToBannersObjects2Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects2 */
/* Reuse gdjs.RewardVideosCode.GDGoToBannersObjects2 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setString(" Go to\nBanners");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects2.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects2[i].setPosition((( gdjs.RewardVideosCode.GDGoToBannersObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDGoToBannersObjects2[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDGoToBannersObjects2.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDGoToBannersObjects2[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.RewardVideosCode.GDButtonTextObjects1.createFrom(runtimeScene.getObjects("ButtonText"));
gdjs.RewardVideosCode.GDGoToInterstitialsObjects1.createFrom(runtimeScene.getObjects("GoToInterstitials"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDButtonTextObjects1Objects, gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToInterstitialsObjects1Objects, false, runtimeScene, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RewardVideosCode.GDButtonTextObjects1 */
/* Reuse gdjs.RewardVideosCode.GDGoToInterstitialsObjects1 */
{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects1.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects1[i].setString("    Go to\nInterstitials");
}
}{for(var i = 0, len = gdjs.RewardVideosCode.GDButtonTextObjects1.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDButtonTextObjects1[i].setPosition((( gdjs.RewardVideosCode.GDGoToInterstitialsObjects1.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDGoToInterstitialsObjects1[0].getPointX("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects1[i].getWidth()) / 2,(( gdjs.RewardVideosCode.GDGoToInterstitialsObjects1.length === 0 ) ? 0 :gdjs.RewardVideosCode.GDGoToInterstitialsObjects1[0].getPointY("Centre")) - (gdjs.RewardVideosCode.GDButtonTextObjects1[i].getHeight()) / 2);
}
}}

}


}; //End of gdjs.RewardVideosCode.eventsList0x784f9c
gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadObjects2Objects = Hashtable.newFrom({"Load": gdjs.RewardVideosCode.GDLoadObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDDisplayObjects2Objects = Hashtable.newFrom({"Display": gdjs.RewardVideosCode.GDDisplayObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadAndDisplayObjects2Objects = Hashtable.newFrom({"LoadAndDisplay": gdjs.RewardVideosCode.GDLoadAndDisplayObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDClaimRewardObjects2Objects = Hashtable.newFrom({"ClaimReward": gdjs.RewardVideosCode.GDClaimRewardObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToBannersObjects2Objects = Hashtable.newFrom({"GoToBanners": gdjs.RewardVideosCode.GDGoToBannersObjects2});gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToInterstitialsObjects1Objects = Hashtable.newFrom({"GoToInterstitials": gdjs.RewardVideosCode.GDGoToInterstitialsObjects1});gdjs.RewardVideosCode.eventsList0x7959b4 = function(runtimeScene) {

{

gdjs.RewardVideosCode.GDLoadObjects2.createFrom(runtimeScene.getObjects("Load"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadObjects2Objects, runtimeScene, false, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{gdjs.adMob.loadVideo("ca-app-pub-3940256099942544/5224354917", "test", false, false);
}}

}


{

gdjs.RewardVideosCode.GDDisplayObjects2.createFrom(runtimeScene.getObjects("Display"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDDisplayObjects2Objects, runtimeScene, false, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{gdjs.adMob.showVideo();
}}

}


{

gdjs.RewardVideosCode.GDLoadAndDisplayObjects2.createFrom(runtimeScene.getObjects("LoadAndDisplay"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDLoadAndDisplayObjects2Objects, runtimeScene, false, false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{gdjs.adMob.loadVideo("ca-app-pub-3940256099942544/5224354917", "test", true, false);
}}

}


{

gdjs.RewardVideosCode.GDClaimRewardObjects2.createFrom(runtimeScene.getObjects("ClaimReward"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
gdjs.RewardVideosCode.condition1IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDClaimRewardObjects2Objects, runtimeScene, false, false);
}if ( gdjs.RewardVideosCode.condition0IsTrue_0.val ) {
{
gdjs.RewardVideosCode.condition1IsTrue_0.val = gdjs.adMob.existVideoReward(true);
}}
if (gdjs.RewardVideosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)) + ";" + gdjs.evtTools.common.toString(gdjs.random(255)));
}}

}


{

gdjs.RewardVideosCode.GDGoToBannersObjects2.createFrom(runtimeScene.getObjects("GoToBanners"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
gdjs.RewardVideosCode.condition1IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToBannersObjects2Objects, runtimeScene, false, false);
}if ( gdjs.RewardVideosCode.condition0IsTrue_0.val ) {
{
gdjs.RewardVideosCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("just_changed_scene")) == 0;
}}
if (gdjs.RewardVideosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Banners", true);
}}

}


{

gdjs.RewardVideosCode.GDGoToInterstitialsObjects1.createFrom(runtimeScene.getObjects("GoToInterstitials"));

gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
gdjs.RewardVideosCode.condition1IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RewardVideosCode.mapOfGDgdjs_46RewardVideosCode_46GDGoToInterstitialsObjects1Objects, runtimeScene, false, false);
}if ( gdjs.RewardVideosCode.condition0IsTrue_0.val ) {
{
gdjs.RewardVideosCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("just_changed_scene")) == 0;
}}
if (gdjs.RewardVideosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Interstitials", true);
}}

}


}; //End of gdjs.RewardVideosCode.eventsList0x7959b4
gdjs.RewardVideosCode.eventsList0x708694 = function(runtimeScene) {

{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.adMob.isVideoLoading();
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("loading").setString("true");
}}

}


{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.adMob.isVideoReady();
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("ready").setString("true");
}}

}


{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.adMob.isVideoShowing();
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("showing").setString("true");
}}

}


{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.adMob.existVideoReward(false);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("reward").setString("true");
}}

}


{


{
gdjs.RewardVideosCode.GDDebugTextObjects1.createFrom(runtimeScene.getObjects("DebugText"));
{for(var i = 0, len = gdjs.RewardVideosCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDDebugTextObjects1[i].setString("Loading: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("loading")) + gdjs.evtTools.string.newLine() + "Ready: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("ready")) + gdjs.evtTools.string.newLine() + "Showing: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("showing")) + gdjs.evtTools.string.newLine() + "Reward: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("reward")));
}
}}

}


}; //End of gdjs.RewardVideosCode.eventsList0x708694
gdjs.RewardVideosCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(0);
}}

}


{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RewardVideosCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(1);
}
{ //Subevents
gdjs.RewardVideosCode.eventsList0x784f9c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.RewardVideosCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.RewardVideosCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.RewardVideosCode.GDPlayerObjects1[i].setAngle(gdjs.RewardVideosCode.GDPlayerObjects1[i].getAngle() + (90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.RewardVideosCode.condition0IsTrue_0.val = false;
gdjs.RewardVideosCode.condition1IsTrue_0.val = false;
{
gdjs.RewardVideosCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RewardVideosCode.condition0IsTrue_0.val ) {
{
{gdjs.RewardVideosCode.conditionTrue_1 = gdjs.RewardVideosCode.condition1IsTrue_0;
gdjs.RewardVideosCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7953020);
}
}}
if (gdjs.RewardVideosCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.RewardVideosCode.eventsList0x7959b4(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("loading").setString("false");
}{runtimeScene.getVariables().get("ready").setString("false");
}{runtimeScene.getVariables().get("showing").setString("false");
}{runtimeScene.getVariables().get("reward").setString("false");
}
{ //Subevents
gdjs.RewardVideosCode.eventsList0x708694(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.RewardVideosCode.eventsList0xb4be0


gdjs.RewardVideosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RewardVideosCode.GDPlayerObjects1.length = 0;
gdjs.RewardVideosCode.GDPlayerObjects2.length = 0;
gdjs.RewardVideosCode.GDPlayerObjects3.length = 0;
gdjs.RewardVideosCode.GDDebugTextObjects1.length = 0;
gdjs.RewardVideosCode.GDDebugTextObjects2.length = 0;
gdjs.RewardVideosCode.GDDebugTextObjects3.length = 0;
gdjs.RewardVideosCode.GDLoadObjects1.length = 0;
gdjs.RewardVideosCode.GDLoadObjects2.length = 0;
gdjs.RewardVideosCode.GDLoadObjects3.length = 0;
gdjs.RewardVideosCode.GDDisplayObjects1.length = 0;
gdjs.RewardVideosCode.GDDisplayObjects2.length = 0;
gdjs.RewardVideosCode.GDDisplayObjects3.length = 0;
gdjs.RewardVideosCode.GDLoadAndDisplayObjects1.length = 0;
gdjs.RewardVideosCode.GDLoadAndDisplayObjects2.length = 0;
gdjs.RewardVideosCode.GDLoadAndDisplayObjects3.length = 0;
gdjs.RewardVideosCode.GDClaimRewardObjects1.length = 0;
gdjs.RewardVideosCode.GDClaimRewardObjects2.length = 0;
gdjs.RewardVideosCode.GDClaimRewardObjects3.length = 0;
gdjs.RewardVideosCode.GDTitleObjects1.length = 0;
gdjs.RewardVideosCode.GDTitleObjects2.length = 0;
gdjs.RewardVideosCode.GDTitleObjects3.length = 0;
gdjs.RewardVideosCode.GDButtonTextObjects1.length = 0;
gdjs.RewardVideosCode.GDButtonTextObjects2.length = 0;
gdjs.RewardVideosCode.GDButtonTextObjects3.length = 0;
gdjs.RewardVideosCode.GDGoToBannersObjects1.length = 0;
gdjs.RewardVideosCode.GDGoToBannersObjects2.length = 0;
gdjs.RewardVideosCode.GDGoToBannersObjects3.length = 0;
gdjs.RewardVideosCode.GDGoToInterstitialsObjects1.length = 0;
gdjs.RewardVideosCode.GDGoToInterstitialsObjects2.length = 0;
gdjs.RewardVideosCode.GDGoToInterstitialsObjects3.length = 0;

gdjs.RewardVideosCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['RewardVideosCode'] = gdjs.RewardVideosCode;
