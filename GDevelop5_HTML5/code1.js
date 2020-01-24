gdjs.InterstitialsCode = {};
gdjs.InterstitialsCode.GDImage1Objects1_1final = [];

gdjs.InterstitialsCode.GDImage1Objects1= [];
gdjs.InterstitialsCode.GDImage1Objects2= [];
gdjs.InterstitialsCode.GDImage1Objects3= [];
gdjs.InterstitialsCode.GDBut_953_954Objects1= [];
gdjs.InterstitialsCode.GDBut_953_954Objects2= [];
gdjs.InterstitialsCode.GDBut_953_954Objects3= [];
gdjs.InterstitialsCode.GDBut_951_952Objects1= [];
gdjs.InterstitialsCode.GDBut_951_952Objects2= [];
gdjs.InterstitialsCode.GDBut_951_952Objects3= [];
gdjs.InterstitialsCode.GDChiffreObjects1= [];
gdjs.InterstitialsCode.GDChiffreObjects2= [];
gdjs.InterstitialsCode.GDChiffreObjects3= [];
gdjs.InterstitialsCode.GDNumber2Objects1= [];
gdjs.InterstitialsCode.GDNumber2Objects2= [];
gdjs.InterstitialsCode.GDNumber2Objects3= [];
gdjs.InterstitialsCode.GDNumber3Objects1= [];
gdjs.InterstitialsCode.GDNumber3Objects2= [];
gdjs.InterstitialsCode.GDNumber3Objects3= [];
gdjs.InterstitialsCode.GDNumber4Objects1= [];
gdjs.InterstitialsCode.GDNumber4Objects2= [];
gdjs.InterstitialsCode.GDNumber4Objects3= [];
gdjs.InterstitialsCode.GDNumber5Objects1= [];
gdjs.InterstitialsCode.GDNumber5Objects2= [];
gdjs.InterstitialsCode.GDNumber5Objects3= [];
gdjs.InterstitialsCode.GDNumber6Objects1= [];
gdjs.InterstitialsCode.GDNumber6Objects2= [];
gdjs.InterstitialsCode.GDNumber6Objects3= [];
gdjs.InterstitialsCode.GDNumber7Objects1= [];
gdjs.InterstitialsCode.GDNumber7Objects2= [];
gdjs.InterstitialsCode.GDNumber7Objects3= [];
gdjs.InterstitialsCode.GDNumber8Objects1= [];
gdjs.InterstitialsCode.GDNumber8Objects2= [];
gdjs.InterstitialsCode.GDNumber8Objects3= [];
gdjs.InterstitialsCode.GDNumberObjects1= [];
gdjs.InterstitialsCode.GDNumberObjects2= [];
gdjs.InterstitialsCode.GDNumberObjects3= [];
gdjs.InterstitialsCode.GDlinkObjects1= [];
gdjs.InterstitialsCode.GDlinkObjects2= [];
gdjs.InterstitialsCode.GDlinkObjects3= [];

gdjs.InterstitialsCode.conditionTrue_0 = {val:false};
gdjs.InterstitialsCode.condition0IsTrue_0 = {val:false};
gdjs.InterstitialsCode.condition1IsTrue_0 = {val:false};
gdjs.InterstitialsCode.condition2IsTrue_0 = {val:false};
gdjs.InterstitialsCode.condition3IsTrue_0 = {val:false};
gdjs.InterstitialsCode.condition4IsTrue_0 = {val:false};
gdjs.InterstitialsCode.conditionTrue_1 = {val:false};
gdjs.InterstitialsCode.condition0IsTrue_1 = {val:false};
gdjs.InterstitialsCode.condition1IsTrue_1 = {val:false};
gdjs.InterstitialsCode.condition2IsTrue_1 = {val:false};
gdjs.InterstitialsCode.condition3IsTrue_1 = {val:false};
gdjs.InterstitialsCode.condition4IsTrue_1 = {val:false};


gdjs.InterstitialsCode.eventsList0x6c7124 = function(runtimeScene) {

{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.InterstitialsCode.eventsList0x6c7124
gdjs.InterstitialsCode.eventsList0x70942c = function(runtimeScene) {

{


{
gdjs.InterstitialsCode.GDChiffreObjects1.createFrom(runtimeScene.getObjects("Chiffre"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDChiffreObjects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDChiffreObjects1[i].setAnimationFrame(2);
}
}}

}


}; //End of gdjs.InterstitialsCode.eventsList0x70942c
gdjs.InterstitialsCode.eventsList0x795a54 = function(runtimeScene) {

{

gdjs.InterstitialsCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDChiffreObjects2[i].getAnimationFrame() == 2 ) {
        gdjs.InterstitialsCode.condition0IsTrue_0.val = true;
        gdjs.InterstitialsCode.GDChiffreObjects2[k] = gdjs.InterstitialsCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDChiffreObjects2.length = k;}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition1IsTrue_0;
gdjs.InterstitialsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7947204);
}
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InterstitialsCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.InterstitialsCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDChiffreObjects2[i].setAnimationFrame(0);
}
}}

}


{


{
}

}


}; //End of gdjs.InterstitialsCode.eventsList0x795a54
gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDBut_95951_95952Objects1Objects = Hashtable.newFrom({"But_1_2": gdjs.InterstitialsCode.GDBut_951_952Objects1});gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDChiffreObjects2Objects = Hashtable.newFrom({"Chiffre": gdjs.InterstitialsCode.GDChiffreObjects2});gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDChiffreObjects2Objects = Hashtable.newFrom({"Chiffre": gdjs.InterstitialsCode.GDChiffreObjects2});gdjs.InterstitialsCode.eventsList0x7084ec = function(runtimeScene) {

{

gdjs.InterstitialsCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
gdjs.InterstitialsCode.condition2IsTrue_0.val = false;
gdjs.InterstitialsCode.condition3IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDChiffreObjects2Objects, runtimeScene, true, false);
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InterstitialsCode.condition1IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ChiffreDelay");
}if ( gdjs.InterstitialsCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDChiffreObjects2[i].getAnimationFrame() == 0 ) {
        gdjs.InterstitialsCode.condition3IsTrue_0.val = true;
        gdjs.InterstitialsCode.GDChiffreObjects2[k] = gdjs.InterstitialsCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDChiffreObjects2.length = k;}}
}
}
if (gdjs.InterstitialsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.InterstitialsCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.InterstitialsCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDChiffreObjects2[i].setAnimationFrame(gdjs.InterstitialsCode.GDChiffreObjects2[i].getAnimationFrame() + (1));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChiffreDelay");
}}

}


{

gdjs.InterstitialsCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
gdjs.InterstitialsCode.condition2IsTrue_0.val = false;
gdjs.InterstitialsCode.condition3IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDChiffreObjects2Objects, runtimeScene, true, false);
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InterstitialsCode.condition1IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ChiffreDelay");
}if ( gdjs.InterstitialsCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDChiffreObjects2[i].getAnimationFrame() == 1 ) {
        gdjs.InterstitialsCode.condition3IsTrue_0.val = true;
        gdjs.InterstitialsCode.GDChiffreObjects2[k] = gdjs.InterstitialsCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDChiffreObjects2.length = k;}}
}
}
if (gdjs.InterstitialsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.InterstitialsCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.InterstitialsCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDChiffreObjects2[i].setAnimationFrame(gdjs.InterstitialsCode.GDChiffreObjects2[i].getAnimationFrame() - (1));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChiffreDelay");
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.InterstitialsCode.eventsList0x7084ec
gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDBut_95953_95954Objects1Objects = Hashtable.newFrom({"But_3_4": gdjs.InterstitialsCode.GDBut_953_954Objects1});gdjs.InterstitialsCode.eventsList0x6ccb24 = function(runtimeScene) {

{

gdjs.InterstitialsCode.GDBut_953_954Objects1.createFrom(runtimeScene.getObjects("But_3_4"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDBut_95953_95954Objects1Objects, runtimeScene, true, false);
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}}

}


}; //End of gdjs.InterstitialsCode.eventsList0x6ccb24
gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.InterstitialsCode.GDlinkObjects1});gdjs.InterstitialsCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(0);
}}

}


{


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InterstitialsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(1);
}
{ //Subevents
gdjs.InterstitialsCode.eventsList0x6c7124(runtimeScene);} //End of subevents
}

}


{


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition0IsTrue_0;
gdjs.InterstitialsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7896868);
}
}if (gdjs.InterstitialsCode.condition0IsTrue_0.val) {
gdjs.InterstitialsCode.GDChiffreObjects1.createFrom(runtimeScene.getObjects("Chiffre"));
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDChiffreObjects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDChiffreObjects1[i].pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects1.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects1[i].getAnimationFrame() < 1 ) {
        gdjs.InterstitialsCode.condition0IsTrue_0.val = true;
        gdjs.InterstitialsCode.GDImage1Objects1[k] = gdjs.InterstitialsCode.GDImage1Objects1[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects1.length = k;}if (gdjs.InterstitialsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InterstitialsCode.GDImage1Objects1 */
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.InterstitialsCode.GDImage1Objects1.length = 0;


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition0IsTrue_0;
gdjs.InterstitialsCode.GDImage1Objects1_1final.length = 0;gdjs.InterstitialsCode.condition0IsTrue_1.val = false;
gdjs.InterstitialsCode.condition1IsTrue_1.val = false;
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() < 1 ) {
        gdjs.InterstitialsCode.condition0IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition0IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() > 2 ) {
        gdjs.InterstitialsCode.condition1IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition1IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(gdjs.InterstitialsCode.GDImage1Objects1_1final);
}
}
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition1IsTrue_0;
gdjs.InterstitialsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7888044);
}
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
gdjs.InterstitialsCode.GDNumberObjects1.createFrom(runtimeScene.getObjects("Number"));
gdjs.InterstitialsCode.GDNumber2Objects1.createFrom(runtimeScene.getObjects("Number2"));
gdjs.InterstitialsCode.GDNumber3Objects1.createFrom(runtimeScene.getObjects("Number3"));
gdjs.InterstitialsCode.GDNumber4Objects1.createFrom(runtimeScene.getObjects("Number4"));
gdjs.InterstitialsCode.GDNumber5Objects1.createFrom(runtimeScene.getObjects("Number5"));
gdjs.InterstitialsCode.GDNumber6Objects1.createFrom(runtimeScene.getObjects("Number6"));
gdjs.InterstitialsCode.GDNumber7Objects1.createFrom(runtimeScene.getObjects("Number7"));
gdjs.InterstitialsCode.GDNumber8Objects1.createFrom(runtimeScene.getObjects("Number8"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDNumberObjects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumberObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber2Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber2Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber3Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber3Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber4Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber4Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber5Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber5Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber6Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber6Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber7Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber7Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber8Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber8Objects1[i].setString("");
}
}
{ //Subevents
gdjs.InterstitialsCode.eventsList0x70942c(runtimeScene);} //End of subevents
}

}


{

gdjs.InterstitialsCode.GDImage1Objects1.length = 0;


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition0IsTrue_0;
gdjs.InterstitialsCode.GDImage1Objects1_1final.length = 0;gdjs.InterstitialsCode.condition0IsTrue_1.val = false;
gdjs.InterstitialsCode.condition1IsTrue_1.val = false;
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() == 1 ) {
        gdjs.InterstitialsCode.condition0IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition0IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() == 2 ) {
        gdjs.InterstitialsCode.condition1IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition1IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(gdjs.InterstitialsCode.GDImage1Objects1_1final);
}
}
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition1IsTrue_0;
gdjs.InterstitialsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7953404);
}
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
gdjs.InterstitialsCode.GDNumberObjects1.createFrom(runtimeScene.getObjects("Number"));
gdjs.InterstitialsCode.GDNumber2Objects1.createFrom(runtimeScene.getObjects("Number2"));
gdjs.InterstitialsCode.GDNumber3Objects1.createFrom(runtimeScene.getObjects("Number3"));
gdjs.InterstitialsCode.GDNumber4Objects1.createFrom(runtimeScene.getObjects("Number4"));
gdjs.InterstitialsCode.GDNumber5Objects1.createFrom(runtimeScene.getObjects("Number5"));
gdjs.InterstitialsCode.GDNumber6Objects1.createFrom(runtimeScene.getObjects("Number6"));
gdjs.InterstitialsCode.GDNumber7Objects1.createFrom(runtimeScene.getObjects("Number7"));
gdjs.InterstitialsCode.GDNumber8Objects1.createFrom(runtimeScene.getObjects("Number8"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDNumberObjects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumberObjects1[i].setString("1");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber2Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber2Objects1[i].setString("2");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber3Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber3Objects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber4Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber4Objects1[i].setString("4");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber5Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber5Objects1[i].setString("5");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber6Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber6Objects1[i].setString("6");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber7Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber7Objects1[i].setString("7");
}
}{for(var i = 0, len = gdjs.InterstitialsCode.GDNumber8Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDNumber8Objects1[i].setString("");
}
}
{ //Subevents
gdjs.InterstitialsCode.eventsList0x795a54(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.InterstitialsCode.GDBut_951_952Objects1.createFrom(runtimeScene.getObjects("But_1_2"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDBut_95951_95952Objects1Objects, runtimeScene, true, false);
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.InterstitialsCode.GDImage1Objects1.length = 0;


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 6;
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition1IsTrue_0;
gdjs.InterstitialsCode.GDImage1Objects1_1final.length = 0;gdjs.InterstitialsCode.condition0IsTrue_1.val = false;
gdjs.InterstitialsCode.condition1IsTrue_1.val = false;
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() == 1 ) {
        gdjs.InterstitialsCode.condition0IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition0IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects2[i].getAnimationFrame() == 2 ) {
        gdjs.InterstitialsCode.condition1IsTrue_1.val = true;
        gdjs.InterstitialsCode.GDImage1Objects2[k] = gdjs.InterstitialsCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects2.length = k;if( gdjs.InterstitialsCode.condition1IsTrue_1.val ) {
    gdjs.InterstitialsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.InterstitialsCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.InterstitialsCode.GDImage1Objects1_1final.indexOf(gdjs.InterstitialsCode.GDImage1Objects2[j]) === -1 )
            gdjs.InterstitialsCode.GDImage1Objects1_1final.push(gdjs.InterstitialsCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(gdjs.InterstitialsCode.GDImage1Objects1_1final);
}
}
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InterstitialsCode.GDImage1Objects1 */
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.InterstitialsCode.eventsList0x7084ec(runtimeScene);} //End of subevents
}

}


{


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}if (gdjs.InterstitialsCode.condition0IsTrue_0.val) {
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.InterstitialsCode.eventsList0x6ccb24(runtimeScene);} //End of subevents
}

}


{


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
{gdjs.InterstitialsCode.conditionTrue_1 = gdjs.InterstitialsCode.condition1IsTrue_0;
gdjs.InterstitialsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7104324);
}
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Link");
}}

}


{


gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
{
gdjs.InterstitialsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Link");
}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}}
if (gdjs.InterstitialsCode.condition1IsTrue_0.val) {
gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.InterstitialsCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.InterstitialsCode.GDImage1Objects1[i].setAnimationFrame(4);
}
}}

}


{

gdjs.InterstitialsCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
gdjs.InterstitialsCode.GDlinkObjects1.createFrom(runtimeScene.getObjects("link"));

gdjs.InterstitialsCode.condition0IsTrue_0.val = false;
gdjs.InterstitialsCode.condition1IsTrue_0.val = false;
gdjs.InterstitialsCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InterstitialsCode.GDImage1Objects1.length;i<l;++i) {
    if ( gdjs.InterstitialsCode.GDImage1Objects1[i].getAnimationFrame() == 4 ) {
        gdjs.InterstitialsCode.condition0IsTrue_0.val = true;
        gdjs.InterstitialsCode.GDImage1Objects1[k] = gdjs.InterstitialsCode.GDImage1Objects1[i];
        ++k;
    }
}
gdjs.InterstitialsCode.GDImage1Objects1.length = k;}if ( gdjs.InterstitialsCode.condition0IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InterstitialsCode.mapOfGDgdjs_46InterstitialsCode_46GDlinkObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InterstitialsCode.condition1IsTrue_0.val ) {
{
gdjs.InterstitialsCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.InterstitialsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.bravoloto.com/onepage/fr/index.html", runtimeScene);
}}

}


}; //End of gdjs.InterstitialsCode.eventsList0xb4be0


gdjs.InterstitialsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InterstitialsCode.GDImage1Objects1.length = 0;
gdjs.InterstitialsCode.GDImage1Objects2.length = 0;
gdjs.InterstitialsCode.GDImage1Objects3.length = 0;
gdjs.InterstitialsCode.GDBut_953_954Objects1.length = 0;
gdjs.InterstitialsCode.GDBut_953_954Objects2.length = 0;
gdjs.InterstitialsCode.GDBut_953_954Objects3.length = 0;
gdjs.InterstitialsCode.GDBut_951_952Objects1.length = 0;
gdjs.InterstitialsCode.GDBut_951_952Objects2.length = 0;
gdjs.InterstitialsCode.GDBut_951_952Objects3.length = 0;
gdjs.InterstitialsCode.GDChiffreObjects1.length = 0;
gdjs.InterstitialsCode.GDChiffreObjects2.length = 0;
gdjs.InterstitialsCode.GDChiffreObjects3.length = 0;
gdjs.InterstitialsCode.GDNumber2Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber2Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber2Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber3Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber3Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber3Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber4Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber4Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber4Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber5Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber5Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber5Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber6Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber6Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber6Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber7Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber7Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber7Objects3.length = 0;
gdjs.InterstitialsCode.GDNumber8Objects1.length = 0;
gdjs.InterstitialsCode.GDNumber8Objects2.length = 0;
gdjs.InterstitialsCode.GDNumber8Objects3.length = 0;
gdjs.InterstitialsCode.GDNumberObjects1.length = 0;
gdjs.InterstitialsCode.GDNumberObjects2.length = 0;
gdjs.InterstitialsCode.GDNumberObjects3.length = 0;
gdjs.InterstitialsCode.GDlinkObjects1.length = 0;
gdjs.InterstitialsCode.GDlinkObjects2.length = 0;
gdjs.InterstitialsCode.GDlinkObjects3.length = 0;

gdjs.InterstitialsCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['InterstitialsCode'] = gdjs.InterstitialsCode;
