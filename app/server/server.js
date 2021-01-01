// Required Modules
var express = require("express");
var morgan = require("morgan");
var cors = require('cors');
var app = express();

var port = process.env.PORT || 3002;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("../"));

app.get("/", function (req, res) {
    res.sendFile("index.html", { root: "../client" });
});

app.get("/app.min.js", function (req, res) {
    res.sendFile("app.min.js", { root: "../../" });
})

app.get("/umega.min.css", function (req, res) {
    res.sendFile("umega.min.css", { root: "../../" });
})

app.get("/contacts", function (req, res) {
    var data = [{
        "id": 1,
        "email": "jkeitley0@twitter.com",
        "name": "Juliann Keitley"
    }, {
        "id": 2,
        "email": "nblundin1@ft.com",
        "name": "Nefen Blundin"
    }, {
        "id": 3,
        "email": "cdoxsey2@wiley.com",
        "name": "Cord Doxsey"
    }, {
        "id": 4,
        "email": "jcasella3@bloglines.com",
        "name": "Jaimie Casella"
    }, {
        "id": 5,
        "email": "sgreatex4@gizmodo.com",
        "name": "Sydel Greatex"
    }, {
        "id": 6,
        "email": "ccayford5@mlb.com",
        "name": "Carlye Cayford"
    }, {
        "id": 7,
        "email": "ttarrier6@canalblog.com",
        "name": "Timmy Tarrier"
    }, {
        "id": 8,
        "email": "gmcanellye7@t.co",
        "name": "Galven McAnellye"
    }, {
        "id": 9,
        "email": "mtack8@nsw.gov.au",
        "name": "Moritz Tack"
    }, {
        "id": 10,
        "email": "astrethill9@admin.ch",
        "name": "Agata Strethill"
    }, {
        "id": 11,
        "email": "mbreretona@rediff.com",
        "name": "Maegan Brereton"
    }, {
        "id": 12,
        "email": "dmcminnb@mashable.com",
        "name": "Donnie McMinn"
    }, {
        "id": 13,
        "email": "hnorrisc@tinypic.com",
        "name": "Harmonia Norris"
    }, {
        "id": 14,
        "email": "epoyzerd@dropbox.com",
        "name": "Eirena Poyzer"
    }, {
        "id": 15,
        "email": "hthomae@furl.net",
        "name": "Hamilton Thoma"
    }]
    res.send(data);
});

app.get("/messages/:contactId", function (req, res) {
    let data = {
        "1": {
            "data": [
                {
                    "message": "Restriction of Right Renal Vein with Intraluminal Device, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Replacement of Upper Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Drainage of Right Upper Leg Muscle, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Dilation of Right Peroneal Artery, Bifurcation, Open Approach",
                    "sender": 4
                },
                {
                    "message": "Excision of Right Palatine Bone, Open Approach, Diagnostic",
                    "sender": 5
                },
                {
                    "message": "Dilation of Coronary Artery, One Artery with Drug-eluting Intraluminal Device, Percutaneous Endoscopic Approach",
                    "sender": 6
                },
                {
                    "message": "Excision of Right Upper Leg Muscle, Percutaneous Endoscopic Approach",
                    "sender": 7
                },
                {
                    "message": "Bypass Right Internal Iliac Artery to Right External Iliac Artery with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 8
                },
                {
                    "message": "Excision of Vagus Nerve, Percutaneous Endoscopic Approach",
                    "sender": 9
                },
                {
                    "message": "Revision of Synthetic Substitute in Left Sacroiliac Joint, External Approach",
                    "sender": 10
                },
                {
                    "message": "Occlusion of Colic Vein with Extraluminal Device, Percutaneous Approach",
                    "sender": 11
                },
                {
                    "message": "Plain Radiography of Epidural Veins using High Osmolar Contrast",
                    "sender": 12
                },
                {
                    "message": "Drainage of Nasal Septum with Drainage Device, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Fusion of Left Finger Phalangeal Joint with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 14
                },
                {
                    "message": "Bypass Right Pulmonary Artery from Innominate Artery with Zooplastic Tissue, Open Approach",
                    "sender": 15
                }
            ]
        },
        "2": {
            "data": [
                {
                    "message": "Release Right External Jugular Vein, Percutaneous Approach",
                    "sender": 1
                },
                {
                    "message": "Dilation of Right External Carotid Artery, Bifurcation, with Two Intraluminal Devices, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Bypass Right Ureter to Cutaneous with Synthetic Substitute, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Revision of Autologous Tissue Substitute in Lower Muscle, Open Approach",
                    "sender": 4
                },
                {
                    "message": "Dilation of Left Renal Artery, Bifurcation, with Two Intraluminal Devices, Percutaneous Approach",
                    "sender": 5
                },
                {
                    "message": "Supplement of Left Lower Arm Subcutaneous Tissue and Fascia with Autologous Tissue Substitute, Percutaneous Approach",
                    "sender": 6
                },
                {
                    "message": "Removal of Autologous Tissue Substitute from Vagina and Cul-de-sac, Via Natural or Artificial Opening Endoscopic",
                    "sender": 7
                },
                {
                    "message": "Dilation of Left Peroneal Artery, Percutaneous Approach",
                    "sender": 8
                },
                {
                    "message": "Restriction of Small Intestine with Extraluminal Device, Open Approach",
                    "sender": 9
                },
                {
                    "message": "Dilation of Right Radial Artery with Three Drug-eluting Intraluminal Devices, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Replacement of Upper Gingiva with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Revision of Nonautologous Tissue Substitute in Occipital-cervical Joint, Percutaneous Endoscopic Approach",
                    "sender": 12
                },
                {
                    "message": "Introduction of Anti-inflammatory into Mouth and Pharynx, Via Natural or Artificial Opening",
                    "sender": 13
                },
                {
                    "message": "Revision of Autologous Tissue Substitute in Upper Vein, Percutaneous Approach",
                    "sender": 14
                },
                {
                    "message": "Release Head and Neck Tendon, Percutaneous Endoscopic Approach",
                    "sender": 15
                }
            ]
        },
        "3": {
            "data": [
                {
                    "message": "Supplement Right Frontal Bone with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 1
                },
                {
                    "message": "Revision of External Fixation Device in Right Fibula, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Replacement of Right Finger Phalanx with Synthetic Substitute, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Destruction of Left Hip Muscle, Open Approach",
                    "sender": 4
                },
                {
                    "message": "Bypass Right Subclavian Artery to Bilateral Upper Leg Artery with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 5
                },
                {
                    "message": "Contact Radiation of Thyroid",
                    "sender": 6
                },
                {
                    "message": "Extirpation of Matter from Right Neck Muscle, Percutaneous Endoscopic Approach",
                    "sender": 7
                },
                {
                    "message": "Drainage of Left Pleural Cavity, Percutaneous Approach",
                    "sender": 8
                },
                {
                    "message": "Excision of Right Ureter, Percutaneous Endoscopic Approach",
                    "sender": 9
                },
                {
                    "message": "Extirpation of Matter from Perineum Bursa and Ligament, Percutaneous Approach",
                    "sender": 10
                },
                {
                    "message": "Restriction of Right Face Vein, Percutaneous Approach",
                    "sender": 11
                },
                {
                    "message": "Osteopathic Treatment of Thoracic Region using General Mobilization",
                    "sender": 12
                },
                {
                    "message": "Replacement of Tongue with Nonautologous Tissue Substitute, External Approach",
                    "sender": 13
                },
                {
                    "message": "Removal of Infusion Device from Cisterna Chyli, External Approach",
                    "sender": 14
                },
                {
                    "message": "Computerized Tomography (CT Scan) of Left Finger(s) using Low Osmolar Contrast",
                    "sender": 15
                }
            ]
        },
        "4": {
            "data": [
                {
                    "message": "Excision of Tongue, Palate, Pharynx Muscle, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Excision of Left Temporal Bone, Percutaneous Approach, Diagnostic",
                    "sender": 2
                },
                {
                    "message": "Destruction of Stomach, Pylorus, Via Natural or Artificial Opening Endoscopic",
                    "sender": 3
                },
                {
                    "message": "Plaque Radiation of Uterus",
                    "sender": 4
                },
                {
                    "message": "Bypass Pelvic Cavity to Pelvic Cavity with Synthetic Substitute, Open Approach",
                    "sender": 5
                },
                {
                    "message": "Bypass Left Common Iliac Artery to Right Femoral Artery, Open Approach",
                    "sender": 6
                },
                {
                    "message": "Dilation of Left Temporal Artery with Four or More Intraluminal Devices, Open Approach",
                    "sender": 7
                },
                {
                    "message": "Dilation of Jejunum with Intraluminal Device, Via Natural or Artificial Opening",
                    "sender": 8
                },
                {
                    "message": "Beam Radiation of Bladder using Photons 1 - 10 MeV",
                    "sender": 9
                },
                {
                    "message": "Immobilization of Neck using Cast",
                    "sender": 10
                },
                {
                    "message": "Dilation of Left Vertebral Artery with Four or More Drug-eluting Intraluminal Devices, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Occlusion of Urethra with Intraluminal Device, Percutaneous Endoscopic Approach",
                    "sender": 12
                },
                {
                    "message": "Motor Function Treatment of Musculoskeletal System - Lower Back / Lower Extremity using Other Equipment",
                    "sender": 13
                },
                {
                    "message": "Fluoroscopy of Left Ribs",
                    "sender": 14
                },
                {
                    "message": "Extirpation of Matter from Left Ankle Bursa and Ligament, Percutaneous Approach",
                    "sender": 15
                }
            ]
        },
        "5": {
            "data": [
                {
                    "message": "Dilation of Right Innominate Vein with Intraluminal Device, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Division of Right Patella, Open Approach",
                    "sender": 2
                },
                {
                    "message": "Extirpation of Matter from Right Lesser Saphenous Vein, Open Approach",
                    "sender": 3
                },
                {
                    "message": "Excision of Right Inguinal Region, Percutaneous Approach, Diagnostic",
                    "sender": 4
                },
                {
                    "message": "Excision of Left Inguinal Lymphatic, Percutaneous Approach, Diagnostic",
                    "sender": 5
                },
                {
                    "message": "Dilation of Right Eustachian Tube, Via Natural or Artificial Opening",
                    "sender": 6
                },
                {
                    "message": "Drainage of Left Lens, Percutaneous Approach",
                    "sender": 7
                },
                {
                    "message": "Insertion of Other Device into Right Shoulder Region, Open Approach",
                    "sender": 8
                },
                {
                    "message": "Release Right Hip Tendon, Open Approach",
                    "sender": 9
                },
                {
                    "message": "Revision of Infusion Device in Vas Deferens, Via Natural or Artificial Opening",
                    "sender": 10
                },
                {
                    "message": "Supplement Right Spermatic Cord with Synthetic Substitute, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Resection of Right Upper Femur, Open Approach",
                    "sender": 12
                },
                {
                    "message": "Revision of Synthetic Substitute in Lumbar Vertebral Joint, Open Approach",
                    "sender": 13
                },
                {
                    "message": "Occlusion of Left Neck Lymphatic with Extraluminal Device, Open Approach",
                    "sender": 14
                },
                {
                    "message": "Excision of Right Subclavian Artery, Percutaneous Approach",
                    "sender": 15
                }
            ]
        },
        "6": {
            "data": [
                {
                    "message": "Repair Cul-de-sac, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Destruction of Right Upper Arm Muscle, Percutaneous Approach",
                    "sender": 2
                },
                {
                    "message": "Low Dose Rate (LDR) Brachytherapy of Liver using Californium 252 (Cf-252)",
                    "sender": 3
                },
                {
                    "message": "Restriction of Right Kidney Pelvis, Percutaneous Endoscopic Approach",
                    "sender": 4
                },
                {
                    "message": "Computerized Tomography (CT Scan) of Left Pulmonary Artery",
                    "sender": 5
                },
                {
                    "message": "Dilation of Right Popliteal Artery with Four or More Drug-eluting Intraluminal Devices, Open Approach",
                    "sender": 6
                },
                {
                    "message": "Insertion of Intraluminal Device into Colic Vein, Open Approach",
                    "sender": 7
                },
                {
                    "message": "Ultrasonography of Penile Arteries",
                    "sender": 8
                },
                {
                    "message": "Drainage of Left Femoral Region, Percutaneous Endoscopic Approach, Diagnostic",
                    "sender": 9
                },
                {
                    "message": "Bypass Right Internal Iliac Artery to Foot Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 10
                },
                {
                    "message": "Supplement Superior Mesenteric Vein with Autologous Tissue Substitute, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Inspection of Cervical Vertebral Joint, External Approach",
                    "sender": 12
                },
                {
                    "message": "Fusion of Right Elbow Joint with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Removal of Radioactive Element from Right Lung, External Approach",
                    "sender": 14
                },
                {
                    "message": "Repair Left Lacrimal Duct, Via Natural or Artificial Opening Endoscopic",
                    "sender": 15
                }
            ]
        },
        "7": {
            "data": [
                {
                    "message": "Medication Management",
                    "sender": 1
                },
                {
                    "message": "Revision of Neurostimulator Lead in Cerebral Ventricle, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Supplement Left Ankle Joint with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 3
                },
                {
                    "message": "Excision of Right Basilic Vein, Percutaneous Approach",
                    "sender": 4
                },
                {
                    "message": "Removal of Autologous Tissue Substitute from Lymphatic, Percutaneous Approach",
                    "sender": 5
                },
                {
                    "message": "Monitoring of Respiratory Volume, Via Natural or Artificial Opening",
                    "sender": 6
                },
                {
                    "message": "Drainage of Right Thorax Muscle with Drainage Device, Percutaneous Approach",
                    "sender": 7
                },
                {
                    "message": "Alteration of Chest Wall with Synthetic Substitute, Percutaneous Approach",
                    "sender": 8
                },
                {
                    "message": "Bypass Left Pulmonary Artery from Subclavian with Autologous Arterial Tissue, Open Approach",
                    "sender": 9
                },
                {
                    "message": "Pharmacotherapy for Substance Abuse Treatment, Other Replacement Medication",
                    "sender": 10
                },
                {
                    "message": "Change Cast on Left Upper Leg",
                    "sender": 11
                },
                {
                    "message": "Supplement Right Hepatic Duct with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 12
                },
                {
                    "message": "Occlusion of Right Pulmonary Vein with Intraluminal Device, Open Approach",
                    "sender": 13
                },
                {
                    "message": "Supplement Thoracic Aorta, Descending with Autologous Tissue Substitute, Percutaneous Approach",
                    "sender": 14
                },
                {
                    "message": "Bypass Right Femoral Artery to Posterior Tibial Artery with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 15
                }
            ]
        },
        "8": {
            "data": [
                {
                    "message": "Drainage of Left Carotid Body, Percutaneous Approach, Diagnostic",
                    "sender": 1
                },
                {
                    "message": "Drainage of Right Patella, Percutaneous Approach",
                    "sender": 2
                },
                {
                    "message": "Excision of Left Lung, Via Natural or Artificial Opening, Diagnostic",
                    "sender": 3
                },
                {
                    "message": "Occlusion of Right Internal Mammary Artery with Intraluminal Device, Percutaneous Approach",
                    "sender": 4
                },
                {
                    "message": "Removal of Radioactive Element from Abdominal Wall, Percutaneous Approach",
                    "sender": 5
                },
                {
                    "message": "Replacement of Left Hip Joint with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 6
                },
                {
                    "message": "Replacement of Right Metacarpal with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 7
                },
                {
                    "message": "Drainage of Thoracic Vertebra, Percutaneous Approach, Diagnostic",
                    "sender": 8
                },
                {
                    "message": "Bypass Abdominal Aorta to Left External Iliac Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 9
                },
                {
                    "message": "Supplement Right Upper Arm with Nonautologous Tissue Substitute, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Augmentative/Alternative Communication System Assessment",
                    "sender": 11
                },
                {
                    "message": "Restriction of Left Brachial Vein with Extraluminal Device, Open Approach",
                    "sender": 12
                },
                {
                    "message": "Revision of Spacer in Left Hip Joint, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Therapeutic Exercise Treatment of Neurological System - Upper Back / Upper Extremity using Aerobic Endurance and Conditioning Equipment",
                    "sender": 14
                },
                {
                    "message": "Destruction of Right Neck Lymphatic, Percutaneous Approach",
                    "sender": 15
                }
            ]
        },
        "9": {
            "data": [
                {
                    "message": "Removal of Synthetic Substitute from Lower Intestinal Tract, Percutaneous Approach",
                    "sender": 1
                },
                {
                    "message": "Repair Left Foot Muscle, Open Approach",
                    "sender": 2
                },
                {
                    "message": "Insertion of Infusion Device into Left Lower Leg, Percutaneous Endoscopic Approach",
                    "sender": 3
                },
                {
                    "message": "Release Left Ankle Bursa and Ligament, Percutaneous Endoscopic Approach",
                    "sender": 4
                },
                {
                    "message": "Dilation of Splenic Artery with Two Intraluminal Devices, Percutaneous Endoscopic Approach",
                    "sender": 5
                },
                {
                    "message": "Beam Radiation of Jejunum using Neutrons",
                    "sender": 6
                },
                {
                    "message": "Beam Radiation of Eye using Electrons, Intraoperative",
                    "sender": 7
                },
                {
                    "message": "Drainage of Left Thorax Muscle, Open Approach, Diagnostic",
                    "sender": 8
                },
                {
                    "message": "Excision of Lumbar Sympathetic Nerve, Open Approach, Diagnostic",
                    "sender": 9
                },
                {
                    "message": "Destruction of Left Abdomen Bursa and Ligament, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Restriction of Lower Vein with Intraluminal Device, Percutaneous Approach",
                    "sender": 11
                },
                {
                    "message": "Supplement Right Thumb with Autologous Tissue Substitute, Open Approach",
                    "sender": 12
                },
                {
                    "message": "Excision of Right Inguinal Region, Percutaneous Approach",
                    "sender": 13
                },
                {
                    "message": "Fusion of Lumbar Vertebral Joint with Synthetic Substitute, Posterior Approach, Posterior Column, Percutaneous Endoscopic Approach",
                    "sender": 14
                },
                {
                    "message": "Fusion of Cervical Vertebral Joint with Interbody Fusion Device, Anterior Approach, Anterior Column, Open Approach",
                    "sender": 15
                }
            ]
        },
        "10": {
            "data": [
                {
                    "message": "Repair Left Popliteal Artery, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Revision of Synthetic Substitute in Right Scapula, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Transfusion of Autologous Fibrinogen into Central Artery, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Magnetic Resonance Imaging (MRI) of Fetal Extremities using Other Contrast",
                    "sender": 4
                },
                {
                    "message": "Drainage of Left Thorax Muscle, Percutaneous Endoscopic Approach",
                    "sender": 5
                },
                {
                    "message": "Supplement of Face Subcutaneous Tissue and Fascia with Autologous Tissue Substitute, Open Approach",
                    "sender": 6
                },
                {
                    "message": "Reattachment of Left Tunica Vaginalis, Percutaneous Endoscopic Approach",
                    "sender": 7
                },
                {
                    "message": "Removal of Pressure Dressing on Right Thumb",
                    "sender": 8
                },
                {
                    "message": "Revision of Infusion Device in Thoracolumbar Vertebral Joint, Percutaneous Approach",
                    "sender": 9
                },
                {
                    "message": "Beam Radiation of Right Breast using Electrons",
                    "sender": 10
                },
                {
                    "message": "Drainage of Right Upper Lung Lobe with Drainage Device, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Release Ampulla of Vater, Via Natural or Artificial Opening Endoscopic",
                    "sender": 12
                },
                {
                    "message": "Occlusion of Right Subclavian Artery with Extraluminal Device, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Insertion of Pressure Sensor Monitoring Device into Thoracic Aorta, Ascending/Arch, Percutaneous Approach",
                    "sender": 14
                },
                {
                    "message": "Drainage of Trachea, Via Natural or Artificial Opening",
                    "sender": 15
                }
            ]
        },
        "11": {
            "data": [
                {
                    "message": "Excision of Right Humeral Shaft, Percutaneous Approach",
                    "sender": 1
                },
                {
                    "message": "Drainage of Parathyroid Gland with Drainage Device, Open Approach",
                    "sender": 2
                },
                {
                    "message": "Revision of Autologous Tissue Substitute in Left Finger Phalanx, External Approach",
                    "sender": 3
                },
                {
                    "message": "Insertion of Infusion Device into Right Lung, Via Natural or Artificial Opening",
                    "sender": 4
                },
                {
                    "message": "Excision of Right Sphenoid Sinus, Open Approach",
                    "sender": 5
                },
                {
                    "message": "Nonimaging Nuclear Medicine Probe of Chest using Other Radionuclide",
                    "sender": 6
                },
                {
                    "message": "Repair Sternum, Open Approach",
                    "sender": 7
                },
                {
                    "message": "Drainage of Left Tibia, Percutaneous Approach, Diagnostic",
                    "sender": 8
                },
                {
                    "message": "Insertion of Radioactive Element into Trunk Subcutaneous Tissue and Fascia, Open Approach",
                    "sender": 9
                },
                {
                    "message": "Occlusion of Left Kidney Pelvis, Via Natural or Artificial Opening",
                    "sender": 10
                },
                {
                    "message": "Drainage of Left Vocal Cord, Percutaneous Endoscopic Approach, Diagnostic",
                    "sender": 11
                },
                {
                    "message": "Drainage of Brachial Plexus with Drainage Device, Percutaneous Endoscopic Approach",
                    "sender": 12
                },
                {
                    "message": "Nonspoken Language Assessment using Other Equipment",
                    "sender": 13
                },
                {
                    "message": "Plain Radiography of Left Parotid Gland using Low Osmolar Contrast",
                    "sender": 14
                },
                {
                    "message": "Bypass Right Subclavian Artery to Right Upper Arm Artery with Autologous Venous Tissue, Open Approach",
                    "sender": 15
                }
            ]
        },
        "12": {
            "data": [
                {
                    "message": "Division of Left Femoral Shaft, Open Approach",
                    "sender": 1
                },
                {
                    "message": "Bypass Left Femoral Vein to Lower Vein with Autologous Venous Tissue, Open Approach",
                    "sender": 2
                },
                {
                    "message": "Drainage of Right Femoral Vein with Drainage Device, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Supplement Right Hypogastric Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 4
                },
                {
                    "message": "Destruction of Right Seminal Vesicle, Percutaneous Approach",
                    "sender": 5
                },
                {
                    "message": "Bypass Upper Esophagus to Ileum with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 6
                },
                {
                    "message": "Introduction of Nutritional Substance into Biliary and Pancreatic Tract, Via Natural or Artificial Opening Endoscopic",
                    "sender": 7
                },
                {
                    "message": "Bypass Left Common Iliac Artery to Left Femoral Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 8
                },
                {
                    "message": "Plain Radiography of Cervical Spine, Densitometry",
                    "sender": 9
                },
                {
                    "message": "Occlusion of Left Kidney Pelvis, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Restriction of Abdominal Aorta with Branched or Fenestrated Intraluminal Device, One or Two Arteries, Percutaneous Endoscopic Approach",
                    "sender": 11
                },
                {
                    "message": "Drainage of Left Extraocular Muscle with Drainage Device, Open Approach",
                    "sender": 12
                },
                {
                    "message": "Revision of Autologous Tissue Substitute in Bladder, External Approach",
                    "sender": 13
                },
                {
                    "message": "Monitoring of Venous Flow, Peripheral, Open Approach",
                    "sender": 14
                },
                {
                    "message": "Extraction of Pelvic Region Subcutaneous Tissue and Fascia, Percutaneous Approach",
                    "sender": 15
                }
            ]
        },
        "13": {
            "data": [
                {
                    "message": "Insertion of Infusion Device into Right Knee Joint, Percutaneous Approach",
                    "sender": 1
                },
                {
                    "message": "Drainage of Left Finger Phalangeal Joint with Drainage Device, Percutaneous Endoscopic Approach",
                    "sender": 2
                },
                {
                    "message": "Dilation of Left Hand Artery, Bifurcation, with Two Drug-eluting Intraluminal Devices, Percutaneous Approach",
                    "sender": 3
                },
                {
                    "message": "Replacement of Inferior Vena Cava with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 4
                },
                {
                    "message": "Release Left Sublingual Gland, Open Approach",
                    "sender": 5
                },
                {
                    "message": "Revision of Spacer in Right Carpal Joint, External Approach",
                    "sender": 6
                },
                {
                    "message": "Bypass Right Foot Vein to Lower Vein, Open Approach",
                    "sender": 7
                },
                {
                    "message": "Bypass Bilateral Vas Deferens to Right Vas Deferens with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 8
                },
                {
                    "message": "Replacement of Right Lacrimal Duct with Synthetic Substitute, Via Natural or Artificial Opening",
                    "sender": 9
                },
                {
                    "message": "Removal of External Fixation Device from Left Ankle Joint, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Replacement of Nasopharynx with Autologous Tissue Substitute, Open Approach",
                    "sender": 11
                },
                {
                    "message": "Drainage of Right Thyroid Gland Lobe with Drainage Device, Open Approach",
                    "sender": 12
                },
                {
                    "message": "Dilation of Esophagogastric Junction, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Bypass Coronary Artery, Four or More Arteries from Right Internal Mammary, Open Approach",
                    "sender": 14
                },
                {
                    "message": "Supplement Splenic Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 15
                }
            ]
        },
        "14": {
            "data": [
                {
                    "message": "Occlusion of Right Internal Mammary Artery with Intraluminal Device, Percutaneous Approach",
                    "sender": 1
                },
                {
                    "message": "Occlusion of Right Axillary Lymphatic with Intraluminal Device, Open Approach",
                    "sender": 2
                },
                {
                    "message": "Ultrasonography of Right Adrenal Gland",
                    "sender": 3
                },
                {
                    "message": "Beam Radiation of Salivary Glands using Electrons, Intraoperative",
                    "sender": 4
                },
                {
                    "message": "Dilation of Left Femoral Artery, Bifurcation, with Two Intraluminal Devices, Open Approach",
                    "sender": 5
                },
                {
                    "message": "Fusion of Right Finger Phalangeal Joint with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 6
                },
                {
                    "message": "Dilation of Right Hepatic Duct, Percutaneous Endoscopic Approach",
                    "sender": 7
                },
                {
                    "message": "Occlusion of Left Colic Artery, Percutaneous Approach",
                    "sender": 8
                },
                {
                    "message": "Drainage of Right Lower Extremity with Drainage Device, Percutaneous Endoscopic Approach",
                    "sender": 9
                },
                {
                    "message": "Bypass Innominate Artery to Left Upper Leg Artery with Synthetic Substitute, Open Approach",
                    "sender": 10
                },
                {
                    "message": "Inspection of Upper Intestinal Tract, Via Natural or Artificial Opening Endoscopic",
                    "sender": 11
                },
                {
                    "message": "Revision of Autologous Tissue Substitute in Right Metacarpocarpal Joint, External Approach",
                    "sender": 12
                },
                {
                    "message": "Bypass Left Internal Iliac Artery to Left External Iliac Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 13
                },
                {
                    "message": "Occlusion of Accessory Pancreatic Duct, Percutaneous Approach",
                    "sender": 14
                },
                {
                    "message": "Reposition Left Femoral Artery, Open Approach",
                    "sender": 15
                }
            ]
        },
        "15": {
            "data": [
                {
                    "message": "Dilation of Right Radial Artery, Bifurcation, with Two Intraluminal Devices, Percutaneous Endoscopic Approach",
                    "sender": 1
                },
                {
                    "message": "Fluoroscopy of Thoracolumbar Joint using High Osmolar Contrast",
                    "sender": 2
                },
                {
                    "message": "Supplement Right Pulmonary Vein with Zooplastic Tissue, Percutaneous Endoscopic Approach",
                    "sender": 3
                },
                {
                    "message": "Drainage of Chest Wall, Percutaneous Endoscopic Approach, Diagnostic",
                    "sender": 4
                },
                {
                    "message": "Dilation of Left Peroneal Artery with Four or More Intraluminal Devices, Percutaneous Approach",
                    "sender": 5
                },
                {
                    "message": "Supplement Right Diaphragm with Synthetic Substitute, Open Approach",
                    "sender": 6
                },
                {
                    "message": "Reposition Left Toe Phalanx, Percutaneous Approach",
                    "sender": 7
                },
                {
                    "message": "Reposition Left Metacarpal, External Approach",
                    "sender": 8
                },
                {
                    "message": "Drainage of Right Eye, External Approach",
                    "sender": 9
                },
                {
                    "message": "Replacement of Right External Jugular Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                    "sender": 10
                },
                {
                    "message": "Repair Anal Sphincter, Percutaneous Approach",
                    "sender": 11
                },
                {
                    "message": "Supplement Hemiazygos Vein with Synthetic Substitute, Percutaneous Approach",
                    "sender": 12
                },
                {
                    "message": "Insertion of Defibrillator Lead into Right Ventricle, Open Approach",
                    "sender": 13
                },
                {
                    "message": "Restriction of Sigmoid Colon with Intraluminal Device, Percutaneous Approach",
                    "sender": 14
                },
                {
                    "message": "Extirpation of Matter from Middle Colic Artery, Bifurcation, Percutaneous Approach",
                    "sender": 15
                }
            ]
        }
    }
    res.send(data[req.params.contactId].data);
});

app.get("/details/:contactId", function (req, res) {
    let data = {
        "1": {
            "first_name": "Abbe",
            "last_name": "Daldry",
            "email": "adaldry0@fastcompany.com",
            "gender": "Male",
            "address": "641 Fremont Circle"
        },
        "2": {
            "first_name": "Olive",
            "last_name": "Curteis",
            "email": "ocurteis1@homestead.com",
            "gender": "Female",
            "address": "1 Schlimgen Center"
        },
        "3": {
            "first_name": "Frans",
            "last_name": "Raspel",
            "email": "fraspel2@usa.gov",
            "gender": "Male",
            "address": "8481 Florence Way"
        },
        "4": {
            "first_name": "Jasun",
            "last_name": "Donnelly",
            "email": "jdonnelly3@marriott.com",
            "gender": "Male",
            "address": "8335 International Drive"
        },
        "5": {
            "first_name": "Craggy",
            "last_name": "Fishpond",
            "email": "cfishpond4@etsy.com",
            "gender": "Male",
            "address": "4557 Derek Way"
        },
        "6": {
            "first_name": "Galvin",
            "last_name": "Charrett",
            "email": "gcharrett5@marriott.com",
            "gender": "Male",
            "address": "8920 Arkansas Place"
        },
        "7": {
            "first_name": "Krystyna",
            "last_name": "Dobrowolny",
            "email": "kdobrowolny6@telegraph.co.uk",
            "gender": "Female",
            "address": "4 Oakridge Street"
        },
        "8": {
            "first_name": "Vernor",
            "last_name": "Sepey",
            "email": "vsepey7@bloglines.com",
            "gender": "Male",
            "address": "4 Esch Court"
        },
        "9": {
            "first_name": "Harmony",
            "last_name": "Thrush",
            "email": "hthrush8@a8.net",
            "gender": "Female",
            "address": "308 Atwood Park"
        },
        "10": {
            "first_name": "Shea",
            "last_name": "Cringle",
            "email": "scringle9@princeton.edu",
            "gender": "Female",
            "address": "97 Mockingbird Point"
        },
        "11": {
            "first_name": "Bobbe",
            "last_name": "Moroney",
            "email": "bmoroneya@vimeo.com",
            "gender": "Female",
            "address": "044 John Wall Center"
        },
        "12": {
            "first_name": "Elia",
            "last_name": "Yankishin",
            "email": "eyankishinb@aboutads.info",
            "gender": "Male",
            "address": "51966 Carberry Hill"
        },
        "13": {
            "first_name": "Parnell",
            "last_name": "McKennan",
            "email": "pmckennanc@istockphoto.com",
            "gender": "Male",
            "address": "2 Russell Hill"
        },
        "14": {
            "first_name": "Vern",
            "last_name": "Perris",
            "email": "vperrisd@mozilla.com",
            "gender": "Male",
            "address": "6 Ohio Lane"
        },
        "15": {
            "first_name": "Gabriella",
            "last_name": "Piscopello",
            "email": "gpiscopelloe@sciencedirect.com",
            "gender": "Female",
            "address": "7 Lyons Center"
        }
    }
    res.send(data[req.params.contactId]);
});

// Start Server
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});