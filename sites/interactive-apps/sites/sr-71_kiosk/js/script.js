// VARIABLES
var canvas = document.getElementById("renderCanvas");
var engine = null;
var scene = null;
var sceneToRender = null;
var engine;
var scene;
var openCockpit = Boolean;
var wingInfoOpen = Boolean;
var finInfoOpen = Boolean;
var tl = gsap.timeline({repeat: 0});
let activeInfo = "";
var audio = document.getElementById("audio");
var audioPlaying = false;
var createDefaultEngine = function() 
{
    return new BABYLON.Engine(canvas, true, 
    {
        preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false
    });
};

function playAudio()
{
    if (audioPlaying == false)
    {
        audio.play();
        var playIcon = document.getElementById("play");
        var stopIcon = document.getElementById("stop");
        playIcon.style.display = "none";
        stopIcon.style.display = "block";
        audioPlaying = true;
    }
    else
    {
        audio.pause();
        audio.currentTime = 0;
        var playIcon = document.getElementById("play");
        var stopIcon = document.getElementById("stop");
        playIcon.style.display = "block";
        stopIcon.style.display = "none";
        audioPlaying = false;
    }
}

function infoIn()
{
    tl.to(activeInfo, {duration: 1, right: 0, ease: "power4.out"});
    tl.to("#renderCanvas, .title", {duration: 1, left: "-200px", ease: "power4.out"}, "-=1");
    tl.to(".close-section", {duration: 1, right: "475px", ease: "power4.out"}, "-=0.75");
}

function infoOut()
{
    tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
    tl.to(activeInfo, {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
    tl.to(".close-section", {duration: 1, right: "-500px", ease: "power4.out"}, "-=1");
    tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");
    if(audioPlaying == true)
    {
        audio.pause();
        audio.currentTime = 0;
        var playIcon = document.getElementById("play");
        var stopIcon = document.getElementById("stop");
        playIcon.style.display = "block";
        stopIcon.style.display = "none";
        audioPlaying = false;
    }
    activeInfo = "";
}

BABYLON.ArcRotateCamera.prototype.moveTargetTo = function (newPos, speed) 
{
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
	BABYLON.Animation.CreateAndStartAnimation('at5', this, 'target', speed, 120, this.target, newPos, 0, ease);
}

// FUNCTIONS
const createScene = () => 
{
    // VARIABLES
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 5, new BABYLON.Vector3(0, 0, 0));
	var light = new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0,0,0), scene);
    var skybox = BABYLON.Mesh.CreateBox('skybox', 1000.0, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial('skybox', scene);
    var boxCollider = BABYLON.MeshBuilder.CreateBox("boxCollider", {width: 7, height: 2, depth: 4.2}, scene);
    var invisible = new BABYLON.StandardMaterial("invisible", scene);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var buttonImage = "./images/circleButton.png";
    var cockpitSphere = new BABYLON.MeshBuilder.CreateSphere("cockpitSphere", {diameter: 0.2}, scene);
    var cockpitButton = new BABYLON.GUI.Button.CreateImageOnlyButton("cockpitButton", buttonImage);
    var airframeSphere = new BABYLON.MeshBuilder.CreateSphere("airframeSphere", {diameter: 0.2}, scene);
    var airframeButton = new BABYLON.GUI.Button.CreateImageOnlyButton("airframeButton", buttonImage);
    var engineSphere = new BABYLON.MeshBuilder.CreateSphere("engineSphere", {diameter: 0.2}, scene);
    var engineButton = new BABYLON.GUI.Button.CreateImageOnlyButton("engineButton", buttonImage);
    var landingSphere = new BABYLON.MeshBuilder.CreateSphere("landingSphere", {diameter: 0.2}, scene);
    var landingButton = new BABYLON.GUI.Button.CreateImageOnlyButton("landingButton", buttonImage);

    // Scene Options
	scene.clearColor = new BABYLON.Color3.Black();
	scene.ambientColor = new BABYLON.Color3.Black();
    scene.activeCamera = camera;
	scene.activeCamera.attachControl(canvas);
    camera.wheelPrecision = 200;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    // Collisions
    scene.collisionsEnabled = true;
    boxCollider.checkCollisions = true;
    camera.checkCollisions = true;
    camera.onCollide = function(collidedMesh)
    {
        if(collidedMesh.uniqueId === boxCollider.uniqueId)
        {
            camera.radius = 5;
        }
    }

    // Light Options
    light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(1, 1, 1);
	light.groundColor = new BABYLON.Color3(0, 0, 0);

    // Skybox Options
    skybox.inengineiteDistance = true;
	skyboxMaterial.disableLighting = true;
	skyboxMaterial.backFaceCulling = false;
	skybox.material = skyboxMaterial;
	
    // Skybox Texture
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://raw.githubusercontent.com/PigeonRubbishStudios/SR-71-Kiosk/main/images/textures/night3/night", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

    // Box Collider Options
    invisible.diffuseColor = new BABYLON.Color3(0, 0, 0);
    invisible.alpha = 0;
    boxCollider.material = invisible;
    
    // Import Plane
    var blackbird = BABYLON.SceneLoader.ImportMesh("", "./models/sr-71/", "sr-71.gltf");

    // Cockpit GUI
    cockpitSphere.position.x = 1.8;
    cockpitSphere.position.y = 0.1;
    cockpitSphere.material = invisible;
    cockpitButton.width = "40px";
    cockpitButton.height = "40px";
    cockpitButton.color = "rgba(0, 0, 0, 0)";
    advancedTexture.addControl(cockpitButton);
    cockpitButton.linkWithMesh(cockpitSphere);


    // Airframe GUI
    airframeSphere.position.x = -1.5;
    airframeSphere.position.y = -0.05;
    airframeSphere.position.z = -1.0;
    airframeSphere.material = invisible;
    airframeButton.width = "40px";
    airframeButton.height = "40px";
    airframeButton.color = "rgba(0, 0, 0, 0)";
    advancedTexture.addControl(airframeButton);
    airframeButton.linkWithMesh(airframeSphere);

    // Engine GUI
    engineSphere.position.x = -0.2;
    engineSphere.position.y = -0.08;
    engineSphere.position.z = 0.73;
    engineSphere.material = invisible;
    engineButton.width = "40px";
    engineButton.height = "40px";
    engineButton.color = "rgba(0, 0, 0, 0)";
    advancedTexture.addControl(engineButton);
    engineButton.linkWithMesh(engineSphere);

    // Landing GUI
    landingSphere.position.x = -1.9;
    landingSphere.position.y = 0.1;
    landingSphere.position.z = 0;
    landingSphere.material = invisible;
    landingButton.width = "40px";
    landingButton.height = "40px";
    landingButton.color = "rgba(0, 0, 0, 0)";
    advancedTexture.addControl(landingButton);
    landingButton.linkWithMesh(landingSphere);

    //http://wwwtyro.github.io/space-3d/#animationSpeed=0&fov=90&nebulae=true&pointStars=false&resolution=2048&seed=4g9a1vv0d3e0&stars=false&sun=true
    //Night1 - 5i240qjwjc40
    //Night2 - 2r9jdv6xc1q0
    //Night3 - 3fonam0qemu0
    //Night4 - 4g9a1vv0d3e0

    // Events
    cockpitButton.onPointerClickObservable.add(function ()
    {
        if (activeInfo == "")
        {
            activeInfo = "#cockpit-info";
            infoIn();
        }
        else if(activeInfo == "#airframe-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #airframe-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#cockpit-info";
            infoIn();
        }
        else if (activeInfo == "#engine-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #engine-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");
            if(audioPlaying == true)
            {
                audio.pause();
                audio.currentTime = 0;
                audioPlaying = false;
            }

            activeInfo = "#cockpit-info";
            infoIn();
        }
        else if (activeInfo == "#landing-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #landing-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#cockpit-info";
            infoIn();
        }
    })

    airframeButton.onPointerClickObservable.add(function ()
    {
        if (activeInfo == "")
        {
            activeInfo = "#airframe-info";
            infoIn();
        }
        else if(activeInfo == "#cockpit-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #cockpit-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#airframe-info";
            infoIn();
        }
        else if (activeInfo == "#engine-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #engine-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");
            if(audioPlaying == true)
            {
                audio.pause();
                audio.currentTime = 0;
                audioPlaying = false;
            }

            activeInfo = "#airframe-info";
            infoIn();
        }
        else if (activeInfo == "#landing-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #landing-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#engine-info";
            infoIn();
        }
    })

    engineButton.onPointerClickObservable.add(function ()
    {
        if (activeInfo == "")
        {
            activeInfo = "#engine-info";
            infoIn();
        }
        else if(activeInfo == "#cockpit-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #cockpit-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#engine-info";
            infoIn();
        }
        else if (activeInfo == "#airframe-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #airframe-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#engine-info";
            infoIn();
        }
        else if (activeInfo == "#landing-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #landing-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");
            if(audioPlaying == true)
            {
                audio.pause();
                audio.currentTime = 0;
                audioPlaying = false;
            }

            activeInfo = "#engine-info";
            infoIn();
        }
    })
    
    landingButton.onPointerClickObservable.add(function ()
    {
        if (activeInfo == "")
        {
            activeInfo = "#landing-info";
            infoIn();
        }
        else if(activeInfo == "#cockpit-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #cockpit-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");            

            activeInfo = "#landing-info";
            infoIn();
        }
        else if (activeInfo == "#airframe-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #airframe-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");

            activeInfo = "#landing-info";
            infoIn();
        }
        else if (activeInfo == "#engine-info")
        {
            tl.to(".close-section", {duration: 1, right: "400px", ease: "power4.out"});
            tl.to(".close-section, #engine-info", {duration: 1, right: "-500px", ease: "power4.out"}, "-=0.75");
            tl.to("#renderCanvas, .title", {duration: 1, left: 0, ease: "power4.out"}, "-=0.75");
            if(audioPlaying == true)
            {
                audio.pause();
                audio.currentTime = 0;
                audioPlaying = false;
            }

            activeInfo = "#landing-info";
            infoIn();
        }
    })  

    return scene;
}

initFunction = async function() 
{
    var asyncEngineCreation = async function() 
    {
        try 
        {
            return createDefaultEngine();
        } 
        catch (e) 
        {
            console.log("the available createEngine function failed. Creating the default engine instead");

            return createDefaultEngine();
        }
    }

    engine = await asyncEngineCreation();

    if (!engine) throw 'engine should not be null.';

    scene = createScene();
};

initFunction().then(() => 
{
    sceneToRender = scene
    engine.runRenderLoop(function() 
    {
        if (sceneToRender && sceneToRender.activeCamera) 
        {
            sceneToRender.render();
        }
    });
});

// Resize
window.addEventListener("resize", function() 
{
    engine.resize();
});