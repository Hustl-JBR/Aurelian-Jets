// Aurelian Jets – Flight Planner
(function () {
    'use strict';

    // ── Airport Database ───────────────────────────────────────────────────────
    // [code, displayName, city, lat, lng]
    var AIRPORTS = [
        ['JFK','New York JFK','New York',40.6413,-73.7781],
        ['TEB','Teterboro (TEB)','New York',40.8501,-74.0608],
        ['LAX','Los Angeles (LAX)','Los Angeles',33.9425,-118.4081],
        ['VNY','Van Nuys (VNY)','Los Angeles',34.2098,-118.4898],
        ['ORD','Chicago O\'Hare (ORD)','Chicago',41.9742,-87.9073],
        ['MDW','Chicago Midway (MDW)','Chicago',41.7868,-87.7522],
        ['MIA','Miami International (MIA)','Miami',25.7959,-80.2870],
        ['OPF','Opa-Locka Executive (OPF)','Miami',25.9069,-80.2786],
        ['SFO','San Francisco (SFO)','San Francisco',37.6213,-122.3790],
        ['SJC','San Jose (SJC)','San Jose',37.3626,-121.9290],
        ['LAS','Las Vegas (LAS)','Las Vegas',36.0840,-115.1537],
        ['BOS','Boston Logan (BOS)','Boston',42.3656,-71.0096],
        ['BED','Hanscom Field (BED)','Boston',42.4699,-71.2890],
        ['DFW','Dallas Fort Worth (DFW)','Dallas',32.8998,-97.0403],
        ['DAL','Dallas Love Field (DAL)','Dallas',32.8473,-96.8517],
        ['ATL','Atlanta (ATL)','Atlanta',33.6407,-84.4277],
        ['SEA','Seattle (SEA)','Seattle',47.4502,-122.3088],
        ['DEN','Denver (DEN)','Denver',39.8561,-104.6737],
        ['ASE','Aspen (ASE)','Aspen',39.2232,-106.8689],
        ['EGE','Eagle/Vail (EGE)','Vail',39.6426,-106.9177],
        ['HTO','East Hampton (HTO)','Hamptons',40.9596,-72.2520],
        ['ACK','Nantucket (ACK)','Nantucket',41.2530,-70.0602],
        ['MVY','Martha\'s Vineyard (MVY)','Martha\'s Vineyard',41.3931,-70.6153],
        ['PBI','Palm Beach (PBI)','Palm Beach',26.6832,-80.0956],
        ['TPA','Tampa (TPA)','Tampa',27.9755,-82.5332],
        ['SDL','Scottsdale (SDL)','Scottsdale',33.6229,-111.9105],
        ['PHX','Phoenix (PHX)','Phoenix',33.4373,-112.0078],
        ['HNL','Honolulu (HNL)','Honolulu',21.3245,-157.9251],
        ['SAN','San Diego (SAN)','San Diego',32.7338,-117.1933],
        ['PDX','Portland (PDX)','Portland',45.5898,-122.5951],
        ['MSY','New Orleans (MSY)','New Orleans',29.9934,-90.2580],
        ['IAD','Washington Dulles (IAD)','Washington DC',38.9531,-77.4565],
        ['DCA','Reagan National (DCA)','Washington DC',38.8521,-77.0377],
        ['PHL','Philadelphia (PHL)','Philadelphia',39.8729,-75.2437],
        ['DTW','Detroit (DTW)','Detroit',42.2162,-83.3554],
        ['MSP','Minneapolis (MSP)','Minneapolis',44.8848,-93.2223],
        ['CLT','Charlotte (CLT)','Charlotte',35.2140,-80.9431],
        ['LHR','London Heathrow (LHR)','London',51.4700,-0.4543],
        ['LCY','London City (LCY)','London',51.5053,0.0553],
        ['CDG','Paris Charles de Gaulle','Paris',49.0097,2.5478],
        ['LBG','Paris Le Bourget (LBG)','Paris',48.9694,2.4414],
        ['FRA','Frankfurt (FRA)','Frankfurt',50.0379,8.5622],
        ['AMS','Amsterdam (AMS)','Amsterdam',52.3105,4.7683],
        ['ZRH','Zurich (ZRH)','Zurich',47.4647,8.5492],
        ['GVA','Geneva (GVA)','Geneva',46.2381,6.1089],
        ['FCO','Rome Fiumicino (FCO)','Rome',41.8003,12.2389],
        ['MAD','Madrid (MAD)','Madrid',40.4936,-3.5668],
        ['BCN','Barcelona (BCN)','Barcelona',41.2971,2.0785],
        ['MXP','Milan Malpensa (MXP)','Milan',45.6306,8.7281],
        ['NCE','Nice (NCE)','Nice',43.6584,7.2159],
        ['JMK','Mykonos (JMK)','Mykonos',37.4351,25.3481],
        ['ATH','Athens (ATH)','Athens',37.9364,23.9445],
        ['DXB','Dubai (DXB)','Dubai',25.2532,55.3657],
        ['AUH','Abu Dhabi (AUH)','Abu Dhabi',24.4330,54.6511],
        ['NRT','Tokyo Narita (NRT)','Tokyo',35.7720,140.3929],
        ['HND','Tokyo Haneda (HND)','Tokyo',35.5494,139.7798],
        ['SYD','Sydney (SYD)','Sydney',-33.9399,151.1753],
        ['HKG','Hong Kong (HKG)','Hong Kong',22.3080,113.9185],
        ['SIN','Singapore (SIN)','Singapore',1.3644,103.9915],
        ['YYZ','Toronto (YYZ)','Toronto',43.6777,-79.6248],
        ['YVR','Vancouver (YVR)','Vancouver',49.1947,-123.1792],
        ['NAS','Nassau (NAS)','Nassau',25.0390,-77.4662],
        ['SBH','St. Barthélemy (SBH)','St. Barts',17.9024,-62.8436],
        ['STT','St. Thomas (STT)','St. Thomas',18.3373,-64.9734],
        ['MEX','Mexico City (MEX)','Mexico City',19.4363,-99.0721],
        ['CUN','Cancun (CUN)','Cancun',21.0365,-86.8771],
        ['MBJ','Montego Bay (MBJ)','Jamaica',18.5037,-77.9134],
        ['PUJ','Punta Cana (PUJ)','Punta Cana',18.5674,-68.3634],
        ['SXM','St. Maarten (SXM)','St. Maarten',18.0410,-63.1089],
        ['GRU','São Paulo (GRU)','São Paulo',-23.4356,-46.4731],
        ['EZE','Buenos Aires (EZE)','Buenos Aires',-34.8222,-58.5358],
    ];

    // ── Jet Configurations ─────────────────────────────────────────────────────
    var JETS = [
        {
            type: 'Light Jet',
            speed: 440,
            ratePerHour: 4800,
            passengers: '4–7',
            range: 2000,
            image: 'images/pexels-katie-cerami-110690626-12820604.jpg',
            desc: 'Efficient and nimble for domestic routes. Accesses smaller airports unavailable to larger aircraft.',
            examples: 'Citation CJ3+, Phenom 300E, PC-24'
        },
        {
            type: 'Midsize Jet',
            speed: 470,
            ratePerHour: 6800,
            passengers: '6–9',
            range: 3500,
            image: 'images/pexels-babix-20640897.jpg',
            desc: 'Stand-up cabin with transcontinental range and full cabin amenities.',
            examples: 'Citation XLS+, Hawker 900XP, Learjet 60XR'
        },
        {
            type: 'Heavy Jet',
            speed: 500,
            ratePerHour: 11500,
            passengers: '8–16',
            range: 7000,
            image: 'images/pexels-rama-febryan-1351711115-25724429.jpg',
            desc: 'Intercontinental capability with luxury cabin, dedicated crew, and full amenities.',
            examples: 'Gulfstream G550, Falcon 7X, Challenger 604'
        }
    ];

    // ── State ──────────────────────────────────────────────────────────────────
    var originAirport = null;
    var destAirport   = null;
    var globeReady    = false;
    var scene, camera, renderer, earthMesh, controls;
    var arcTubeMesh   = null;
    var arcTubeGeo    = null;
    var markerGroup   = null;
    var pathPoints    = [];
    var pathCurve     = null;
    var pathProgress  = 0;
    var animId        = null;
    var planeGroup    = null;
    var planePitchGrp = null;
    var TUBE_SEGS     = 500;
    var RADIAL_SEGS   = 8;
    var PULSE_RINGS   = [];
    var landingFired  = false;
    var animClock     = null;
    var shadowTubeMesh    = null;
    var shadowTubeGeo     = null;
    var camOriginTarget   = null;
    var camMidTarget      = null;
    var camDestTarget     = null;
    var camFinalTarget    = null;
    var camChoreography   = true;
    var postAnimTimer     = 0;
    var directionArrow    = null;
    var originLabelEl     = null;
    var destLabelEl       = null;
    var originLabelPos    = null;
    var destLabelPos      = null;

    // ── DOM ────────────────────────────────────────────────────────────────────
    var originInput     = document.getElementById('origin-input');
    var destInput       = document.getElementById('dest-input');
    var originDrop      = document.getElementById('origin-dropdown');
    var destDrop        = document.getElementById('dest-dropdown');
    var planBtn         = document.getElementById('plan-btn');
    var globeWrapper    = document.getElementById('globe-wrapper');
    var globeCanvas     = document.getElementById('globe-canvas');
    var jetResults      = document.getElementById('jet-results');
    var jetGrid         = document.getElementById('jet-results-grid');
    var globeOriginLbl  = document.getElementById('globe-origin-label');
    var globeDestLbl    = document.getElementById('globe-dest-label');
    var globeDistEl     = document.getElementById('globe-distance');

    if (!originInput) return; // planner not on this page

    // ── Autocomplete ───────────────────────────────────────────────────────────
    function searchAirports(q) {
        if (!q || q.length < 2) return [];
        q = q.toLowerCase();
        return AIRPORTS.filter(function(a) {
            return a[0].toLowerCase().startsWith(q) ||
                   a[1].toLowerCase().includes(q) ||
                   a[2].toLowerCase().includes(q);
        }).slice(0, 7);
    }

    function renderDropdown(drop, results, onSelect) {
        drop.innerHTML = '';
        if (!results.length) { drop.classList.remove('open'); return; }
        results.forEach(function(airport) {
            var item = document.createElement('div');
            item.className = 'route-dropdown-item';
            item.innerHTML =
                '<span class="dropdown-code">' + airport[0] + '</span>' +
                '<span class="dropdown-name">' + airport[2] + '</span>';
            item.addEventListener('mousedown', function(e) {
                e.preventDefault();
                onSelect(airport);
                drop.classList.remove('open');
            });
            drop.appendChild(item);
        });
        drop.classList.add('open');
    }

    function wireAutocomplete(input, drop, setter) {
        input.addEventListener('input', function() {
            renderDropdown(drop, searchAirports(input.value), function(a) {
                input.value = a[2] + ' (' + a[0] + ')';
                setter(a);
                checkReady();
            });
        });
        input.addEventListener('blur', function() {
            setTimeout(function() { drop.classList.remove('open'); }, 160);
        });
    }

    wireAutocomplete(originInput, originDrop, function(a) { originAirport = a; });
    wireAutocomplete(destInput,   destDrop,   function(a) { destAirport   = a; });

    function checkReady() {
        planBtn.disabled = !(originAirport && destAirport);
        if (originAirport && destAirport) calculateRoute();
    }

    planBtn.addEventListener('click', calculateRoute);

    // ── Haversine (nautical miles) ─────────────────────────────────────────────
    function haversineNm(lat1, lng1, lat2, lng2) {
        var R = 3440.065;
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLng = (lng2 - lng1) * Math.PI / 180;
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    // ── Calculate Route ────────────────────────────────────────────────────────
    function calculateRoute() {
        if (!originAirport || !destAirport) return;
        var oLat = originAirport[3], oLng = originAirport[4];
        var dLat = destAirport[3],   dLng = destAirport[4];
        var nm   = haversineNm(oLat, oLng, dLat, dLng);

        globeOriginLbl.textContent = originAirport[2];
        globeDestLbl.textContent   = destAirport[2];
        globeDistEl.textContent    = Math.round(nm).toLocaleString() + ' nm';

        globeWrapper.classList.remove('hidden');
        jetResults.classList.remove('hidden');


        if (!globeReady) initGlobe();

        drawPath({ lat: oLat, lng: oLng }, { lat: dLat, lng: dLng });
        renderJetCards(nm);

        setTimeout(function() {
            globeWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
    }

    // ── Three.js Globe ─────────────────────────────────────────────────────────
    function ll2v(lat, lng, r) {
        var phi   = (90 - lat) * (Math.PI / 180);
        var theta = (lng + 180) * (Math.PI / 180);
        return new THREE.Vector3(
            -r * Math.sin(phi) * Math.cos(theta),
             r * Math.cos(phi),
             r * Math.sin(phi) * Math.sin(theta)
        );
    }

    function initGlobe() {
        globeReady = true;
        var W = globeCanvas.offsetWidth  || 800;
        var H = globeCanvas.offsetHeight || 500;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050308);

        camera = new THREE.PerspectiveCamera(22, W / H, 0.1, 1000);
        camera.position.set(0, 0, 11);

        renderer = new THREE.WebGLRenderer({ canvas: globeCanvas, antialias: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.9));
        var sun = new THREE.DirectionalLight(0xffd0a0, 0.5);
        sun.position.set(6, 3, 6);
        scene.add(sun);

        // Earth — night texture shows city lights
        var loader = new THREE.TextureLoader();
        var earthTex = loader.load('https://unpkg.com/three-globe/example/img/earth-night.jpg');
        earthMesh = new THREE.Mesh(
            new THREE.SphereGeometry(2, 72, 72),
            new THREE.MeshBasicMaterial({ map: earthTex, color: 0xffcca0 })
        );
        scene.add(earthMesh);

        // Atmosphere rim glow
        var atmosMesh = new THREE.Mesh(
            new THREE.SphereGeometry(2.06, 64, 64),
            new THREE.MeshPhongMaterial({
                color: 0x4a5055,
                transparent: true,
                opacity: 0.12,
                side: THREE.FrontSide
            })
        );
        scene.add(atmosMesh);

        var glowMesh = new THREE.Mesh(
            new THREE.SphereGeometry(2.22, 64, 64),
            new THREE.MeshPhongMaterial({
                color: 0x1e2225,
                transparent: true,
                opacity: 0.05,
                side: THREE.BackSide
            })
        );
        scene.add(glowMesh);

        // Stars — two layers for depth
        function makeStarField(count, rMin, rMax, size, opacity, color) {
            var pos = new Float32Array(count * 3);
            for (var i = 0; i < count; i++) {
                var th = Math.random() * Math.PI * 2;
                var ph = Math.acos(2 * Math.random() - 1);
                var r  = rMin + Math.random() * (rMax - rMin);
                pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
                pos[i*3+1] = r * Math.cos(ph);
                pos[i*3+2] = r * Math.sin(ph) * Math.sin(th);
            }
            var geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            scene.add(new THREE.Points(geo,
                new THREE.PointsMaterial({ color: color, size: size, transparent: true, opacity: opacity, sizeAttenuation: true })
            ));
        }
        makeStarField(7000, 80, 350, 0.30, 0.80, 0xffffff);   // main field — dense, crisp
        makeStarField(600,  60, 200, 0.70, 0.65, 0xd8e8ff);   // brighter foreground stars, slight blue tint
        makeStarField(200,  50, 150, 1.10, 0.45, 0xfff5e0);   // handful of bright warm highlight stars

        // Orbit controls — no auto-spin
        if (typeof THREE.OrbitControls !== 'undefined') {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping    = true;
            controls.dampingFactor    = 0.07;
            controls.autoRotate       = false;
            controls.minDistance      = 5;
            controls.maxDistance      = 24;
        }

        animClock = { last: performance.now() };
        if (controls) {
            controls.enableRotate = false;
            controls.enableZoom   = false;
            controls.enablePan    = false;
        }

        window.addEventListener('resize', function() {
            if (!renderer) return;
            var nW = globeCanvas.offsetWidth;
            var nH = globeCanvas.offsetHeight;
            camera.aspect = nW / nH;
            camera.updateProjectionMatrix();
            renderer.setSize(nW, nH);
        });

        loop();
    }

    function loop(now) {
        animId = requestAnimationFrame(loop);
        if (controls) controls.update();

        // Frame-rate-independent time delta (seconds)
        var ts = (now && isFinite(now)) ? now : performance.now();
        var delta = Math.min((ts - (animClock ? animClock.last : ts - 16)) / 1000, 0.05);
        if (delta < 0) delta = 0.016;
        if (animClock) animClock.last = ts;

        if (pathCurve && pathProgress < 1) {
            pathProgress = Math.min(pathProgress + delta * 0.143, 1);

            // Reveal flight tube and ground trace together
            var segsVisible = Math.floor(pathProgress * TUBE_SEGS);
            if (arcTubeGeo)    arcTubeGeo.setDrawRange(0, segsVisible * RADIAL_SEGS * 6);
            if (shadowTubeGeo) shadowTubeGeo.setDrawRange(0, segsVisible * 6 * 6);

            // Plane leads tube tip by a few segments so it visibly flies ahead
            if (planeGroup) {
                var planeT = Math.min(0.999, (segsVisible + 4) / TUBE_SEGS);
                updatePlane(Math.max(0.001, planeT));
            }

            if (pathProgress >= 1 && !landingFired) {
                landingFired  = true;
                postAnimTimer = 0.001;
                if (planeGroup) { scene.remove(planeGroup); planeGroup = null; }
                spawnDirectionArrow();
                if (pathPoints.length) spawnPulse(pathPoints[pathPoints.length - 1]);
            }
        }

        // Camera choreography (disabled the moment user drags the globe)
        if (camChoreography && camOriginTarget) {
            var camTarget;
            var pp = pathProgress;

            if (postAnimTimer > 0) {
                // Zoom back out to full-route view after landing
                postAnimTimer += delta;
                var nt = Math.min(postAnimTimer / 3.2, 1);
                var nte = nt * nt * (3 - 2 * nt); // smoothstep
                camTarget = new THREE.Vector3().lerpVectors(camDestTarget, camFinalTarget, nte);
            } else if (pp < 0.18) {
                // Hold tight on departure
                camTarget = camOriginTarget;
            } else if (pp < 0.60) {
                // Pull back to show path forming
                var nt = (pp - 0.18) / 0.42;
                var nte = nt * nt * (3 - 2 * nt);
                camTarget = new THREE.Vector3().lerpVectors(camOriginTarget, camMidTarget, nte);
            } else if (pp < 0.80) {
                // Drift toward arrival
                var nt = (pp - 0.60) / 0.20;
                var nte = nt * nt * (3 - 2 * nt);
                camTarget = new THREE.Vector3().lerpVectors(camMidTarget, camDestTarget, nte);
            } else {
                // Zoom in tight on arrival airport
                camTarget = camDestTarget;
            }

            camera.position.lerp(camTarget, 0.018);
            camera.lookAt(0, 0, 0);
        }

        updatePulseRings(delta);
        updateLabels();
        renderer.render(scene, camera);
    }

    function drawPath(origin, dest) {
        // Clear previous path objects
        if (arcTubeMesh)    { scene.remove(arcTubeMesh);    if (arcTubeGeo)    arcTubeGeo.dispose();    arcTubeMesh    = null; arcTubeGeo    = null; }
        if (shadowTubeMesh) { scene.remove(shadowTubeMesh); if (shadowTubeGeo) shadowTubeGeo.dispose(); shadowTubeMesh = null; shadowTubeGeo = null; }
        if (markerGroup)    { scene.remove(markerGroup);    markerGroup   = null; }
        if (planeGroup)     { scene.remove(planeGroup);     planeGroup    = null; }
        if (directionArrow) { scene.remove(directionArrow); directionArrow = null; }
        if (originLabelEl)  { originLabelEl.remove();  originLabelEl = null; }
        if (destLabelEl)    { destLabelEl.remove();    destLabelEl   = null; }
        PULSE_RINGS.forEach(function(r) { scene.remove(r); });
        PULSE_RINGS      = [];
        landingFired     = false;
        postAnimTimer    = 0;
        camChoreography  = true;

        var R  = 2;
        var oV = ll2v(origin.lat, origin.lng, R);
        var dV = ll2v(dest.lat,   dest.lng,   R);

        // ── Flight arc (elevated) ──────────────────────────────────────────────
        pathPoints = [];
        for (var i = 0; i <= TUBE_SEGS; i++) {
            var t = i / TUBE_SEGS;
            var p = new THREE.Vector3().copy(oV).lerp(dV, t).normalize();
            p.multiplyScalar(R + 0.30 * Math.sin(Math.PI * t));
            pathPoints.push(p);
        }
        pathProgress = 0;
        pathCurve    = new THREE.CatmullRomCurve3(pathPoints);

        arcTubeGeo  = new THREE.TubeGeometry(pathCurve, TUBE_SEGS, 0.011, RADIAL_SEGS, false);
        arcTubeGeo.setDrawRange(0, 0);
        arcTubeMesh = new THREE.Mesh(arcTubeGeo,
            new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.90 })
        );
        scene.add(arcTubeMesh);

        // ── Ground trace / shadow (projected onto surface, no hump) ───────────
        var surfacePoints = [];
        for (var j = 0; j <= TUBE_SEGS; j++) {
            var st = j / TUBE_SEGS;
            var sp = new THREE.Vector3().copy(oV).lerp(dV, st).normalize().multiplyScalar(R * 1.006);
            surfacePoints.push(sp);
        }
        var shadowCurve = new THREE.CatmullRomCurve3(surfacePoints);
        shadowTubeGeo   = new THREE.TubeGeometry(shadowCurve, TUBE_SEGS, 0.007, 6, false);
        shadowTubeGeo.setDrawRange(0, 0);
        shadowTubeMesh  = new THREE.Mesh(shadowTubeGeo,
            new THREE.MeshBasicMaterial({ color: 0x7a5010, transparent: true, opacity: 0.55 })
        );
        scene.add(shadowTubeMesh);

        // ── Airport markers ────────────────────────────────────────────────────
        markerGroup = new THREE.Group();
        [oV, dV].forEach(function(v) {
            var pos = v.clone().normalize().multiplyScalar(R * 1.01);
            var dot = new THREE.Mesh(
                new THREE.SphereGeometry(0.032, 16, 16),
                new THREE.MeshBasicMaterial({ color: 0xd4af37 })
            );
            dot.position.copy(pos);
            markerGroup.add(dot);
            var ring = new THREE.Mesh(
                new THREE.RingGeometry(0.048, 0.072, 32),
                new THREE.MeshBasicMaterial({ color: 0xd4af37, side: THREE.DoubleSide, transparent: true, opacity: 0.45 })
            );
            ring.position.copy(pos.clone().multiplyScalar(1.012));
            ring.lookAt(new THREE.Vector3(0, 0, 0));
            markerGroup.add(ring);
        });
        scene.add(markerGroup);

        // ── Plane mesh ─────────────────────────────────────────────────────────
        planeGroup    = new THREE.Group();
        planePitchGrp = new THREE.Group();
        planeGroup.add(planePitchGrp);
        buildJetInto(planePitchGrp);
        planeGroup.scale.setScalar(0.72);
        scene.add(planeGroup);
        updatePlane(0);
        spawnPulse(pathPoints[0]);

        // ── Airport labels ─────────────────────────────────────────────────────
        originLabelPos = oV.clone().normalize().multiplyScalar(2.12);
        destLabelPos   = dV.clone().normalize().multiplyScalar(2.12);
        function makeLabelEl(airport) {
            var el = document.createElement('div');
            el.className = 'globe-airport-label';
            el.innerHTML =
                '<span class="globe-label-city">' + (airport ? airport[2] : '') + '</span>' +
                '<span class="globe-label-code">' + (airport ? airport[0] : '') + '</span>';
            return el;
        }
        originLabelEl = makeLabelEl(originAirport);
        globeWrapper.appendChild(originLabelEl);
        destLabelEl = makeLabelEl(destAirport);
        globeWrapper.appendChild(destLabelEl);

        // ── Camera targets ─────────────────────────────────────────────────────
        // Positive yLift on close-in shots → camera sits above the airport →
        // airport appears in the lower part of the frame, arc curves upward.
        var oDir = oV.clone().normalize();
        var dDir = dV.clone().normalize();
        var mDir = oDir.clone().add(dDir).normalize();

        camOriginTarget = oDir.clone().add(new THREE.Vector3(0,  0.70, 0)).normalize().multiplyScalar(7.5);
        camMidTarget    = mDir.clone().add(new THREE.Vector3(0, -0.10, 0)).normalize().multiplyScalar(13.5);
        camDestTarget   = dDir.clone().add(new THREE.Vector3(0,  0.70, 0)).normalize().multiplyScalar(7.5);
        camFinalTarget  = mDir.clone().add(new THREE.Vector3(0,  0.05, 0)).normalize().multiplyScalar(12.5);
    }

    function buildJetInto(g) {
        // FlightRadar-style top-down aircraft silhouette (nose along +X, wings along ±Z)
        var u = 0.00095;
        var S = new THREE.Shape();
        S.moveTo( 55*u,   0   );   // nose tip
        S.lineTo( 22*u,   7*u );   // right fuselage
        S.lineTo(  5*u,   8*u );
        S.lineTo( -8*u,   8*u );   // right wing root leading
        S.lineTo(-22*u,  52*u );   // right wing tip
        S.lineTo(-32*u,  47*u );   // right wing tip trailing
        S.lineTo(-22*u,   8*u );   // right wing root trailing
        S.lineTo(-44*u,   6*u );   // right rear fuselage
        S.lineTo(-50*u,   6*u );   // right stab root
        S.lineTo(-58*u,  22*u );   // right stab tip
        S.lineTo(-64*u,  18*u );   // right stab trailing tip
        S.lineTo(-54*u,   4*u );   // right stab root trailing
        S.lineTo(-60*u,   0   );   // tail centre
        S.lineTo(-54*u,  -4*u );
        S.lineTo(-64*u, -18*u );
        S.lineTo(-58*u, -22*u );
        S.lineTo(-50*u,  -6*u );
        S.lineTo(-44*u,  -6*u );
        S.lineTo(-22*u,  -8*u );
        S.lineTo(-32*u, -47*u );
        S.lineTo(-22*u, -52*u );
        S.lineTo( -8*u,  -8*u );
        S.lineTo(  5*u,  -8*u );
        S.lineTo( 22*u,  -7*u );
        S.lineTo( 55*u,   0   );

        var geo = new THREE.ShapeGeometry(S);
        geo.rotateX(Math.PI / 2); // XY plane → XZ plane so wings spread along ±Z

        // Gold border: slightly larger copy behind
        var borderGeo = new THREE.ShapeGeometry(S);
        borderGeo.rotateX(Math.PI / 2);
        borderGeo.scale(1.18, 1, 1.18);
        g.add(new THREE.Mesh(borderGeo,
            new THREE.MeshBasicMaterial({ color: 0xc8981e, side: THREE.DoubleSide })
        ));

        // White body
        g.add(new THREE.Mesh(geo,
            new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
        ));

        // Subtle engine-glow halo
        g.add(new THREE.Mesh(
            new THREE.SphereGeometry(0.016, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xffaa30, transparent: true, opacity: 0.30 })
        ));
    }

    function updatePlane(t) {
        // Use arc-length parameterisation to match TubeGeometry's getPointAt internals
        var pos = pathCurve.getPointAt(t);
        planeGroup.position.copy(pos);

        var tan    = pathCurve.getTangentAt(t).normalize();
        var surfUp = pos.clone().normalize();
        var right  = new THREE.Vector3().crossVectors(tan, surfUp).normalize();
        var up     = new THREE.Vector3().crossVectors(right, tan).normalize();

        var m = new THREE.Matrix4().makeBasis(tan, up, right);
        planeGroup.setRotationFromMatrix(m);
    }

    function spawnPulse(pos) {
        var surfacePos = pos.clone().normalize().multiplyScalar(2.03);
        for (var i = 0; i < 3; i++) {
            var ring = new THREE.Mesh(
                new THREE.RingGeometry(0.035, 0.052, 32),
                new THREE.MeshBasicMaterial({ color: 0xd4af37, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
            );
            ring.position.copy(surfacePos);
            ring.lookAt(new THREE.Vector3(0, 0, 0));
            ring.userData = { life: -(i * 0.45), maxLife: 1.8 };
            scene.add(ring);
            PULSE_RINGS.push(ring);
        }
    }

    function updatePulseRings(delta) {
        for (var i = PULSE_RINGS.length - 1; i >= 0; i--) {
            var r = PULSE_RINGS[i];
            r.userData.life += delta;
            var t = r.userData.life / r.userData.maxLife;
            if (t < 0)  { r.scale.setScalar(0.01); r.material.opacity = 0; continue; }
            if (t > 1)  { scene.remove(r); PULSE_RINGS.splice(i, 1); continue; }
            r.scale.setScalar(1 + t * 3.5);
            r.material.opacity = (1 - t) * 0.75;
        }
    }

    function spawnDirectionArrow() {
        if (!pathCurve) return;
        if (directionArrow) { scene.remove(directionArrow); }

        var t_mid  = 0.5;
        var pos    = pathCurve.getPointAt(t_mid);
        var tan    = pathCurve.getTangentAt(t_mid).normalize();
        var surfUp = pos.clone().normalize();
        var right  = new THREE.Vector3().crossVectors(tan, surfUp).normalize();
        var lift   = surfUp.clone().multiplyScalar(0.02);

        var fwd  = 0.048;
        var back = 0.042;
        var side = 0.058;

        var tip      = pos.clone().addScaledVector(tan,  fwd).add(lift);
        var leftEnd  = pos.clone().addScaledVector(tan, -back).addScaledVector(right,  side).add(lift);
        var rightEnd = pos.clone().addScaledVector(tan, -back).addScaledVector(right, -side).add(lift);

        var mat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.88 });
        directionArrow = new THREE.Group();

        [[tip, leftEnd], [tip, rightEnd]].forEach(function(pts) {
            var geo = new THREE.TubeGeometry(
                new THREE.LineCurve3(pts[0], pts[1]), 2, 0.007, 5, false
            );
            directionArrow.add(new THREE.Mesh(geo, mat));
        });
        scene.add(directionArrow);
    }

    function updateLabels() {
        if (!renderer || !camera) return;
        var W = globeCanvas.offsetWidth;
        var H = globeCanvas.offsetHeight;
        [[originLabelEl, originLabelPos], [destLabelEl, destLabelPos]].forEach(function(pair) {
            var el = pair[0], pos3d = pair[1];
            if (!el || !pos3d) return;
            var v = pos3d.clone().project(camera);
            var x = ( v.x * 0.5 + 0.5) * W;
            var y = (-v.y * 0.5 + 0.5) * H;
            var onScreen = v.z < 1 && x > -80 && x < W + 80 && y > -40 && y < H + 40;
            el.style.opacity = onScreen ? '1' : '0';
            el.style.left    = x + 'px';
            el.style.top     = (y - 62) + 'px';
        });
    }

    function flyCamera(from, to) {
        var t = 0;
        function step() {
            t += 0.018;
            if (t >= 1) { camera.position.copy(to); camera.lookAt(0,0,0); return; }
            var e = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
            camera.position.lerpVectors(from, to, e);
            camera.lookAt(0, 0, 0);
            requestAnimationFrame(step);
        }
        step();
    }

    // ── Jet Cards ──────────────────────────────────────────────────────────────
    function renderJetCards(nm) {
        jetGrid.innerHTML = '';
        JETS.forEach(function(jet) {
            var hours     = nm / jet.speed;
            var totalMins = Math.round(hours * 60);
            var cost      = Math.round(hours * jet.ratePerHour);
            var hrs       = Math.floor(totalMins / 60);
            var mins      = totalMins % 60;
            var timeStr   = hrs > 0 ? hrs + 'h ' + mins + 'm' : mins + 'm';
            var costStr   = '$' + cost.toLocaleString();
            var outRange  = nm > jet.range;

            var card = document.createElement('div');
            card.className = 'jet-result-card' + (outRange ? ' out-of-range' : '');
            card.innerHTML =
                '<div class="jrc-image" style="background-image:url(\'' + jet.image + '\')">' +
                    (outRange ? '<div class="jrc-badge">Extended Range Route</div>' : '') +
                '</div>' +
                '<div class="jrc-body">' +
                    '<h4 class="jrc-type">' + jet.type + '</h4>' +
                    '<p class="jrc-examples">' + jet.examples + '</p>' +
                    '<div class="jrc-stats">' +
                        '<div class="jrc-stat"><span class="jrc-stat-label">Est. Cost</span><span class="jrc-stat-val">' + costStr + '</span></div>' +
                        '<div class="jrc-stat"><span class="jrc-stat-label">Flight Time</span><span class="jrc-stat-val">' + timeStr + '</span></div>' +
                        '<div class="jrc-stat"><span class="jrc-stat-label">Passengers</span><span class="jrc-stat-val">' + jet.passengers + '</span></div>' +
                    '</div>' +
                    '<p class="jrc-desc">' + jet.desc + '</p>' +
                    '<a href="#early-access" class="jrc-cta">Request This Aircraft</a>' +
                '</div>';
            jetGrid.appendChild(card);
        });
    }

})();
