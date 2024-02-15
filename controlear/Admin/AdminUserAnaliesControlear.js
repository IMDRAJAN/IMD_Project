const express = require('express')
const route = express.Router()
const UserAdd = require('../../model/userRegistationModel.js');

const UserAnalies = async (req, res) => {
    console.log('user analies get method');



    //-------------------- --------------  GUJRATA DATA ---------------------------------------



    let Gujarat_State= ["Ahmedabad","Ahwa","Amod","Amreli","Anand","Anjar","Ankaleshwar","Babra","Balasinor","Banaskantha","Bansada","Bardoli","Bareja","Baroda","Barwala","Bayad","Bhachav","Bhanvad","Bharuch","Bhavnagar","Bhiloda","Bhuj","Billimora","Borsad","Botad","Chanasma","ChhotaUdaipur","Chotila","Dabhoi","Dahod","Damnagar","Dang","Danta","Dasada","Dediapada","Deesa","Dehgam","Deodar","Devgadhbaria","Dhandhuka","Dhanera","Dharampur","Dhari","Dholka","Dhoraji","Dhrangadhra","Dhrol","Dwarka","Fortsongadh","Gadhada","GandhiNagar","Gariadhar","Godhra","Gogodar","Gondal","Halol","Halvad","Harij","Himatnagar","Idar","Jambusar","Jamjodhpur","Jamkalyanpur","Jamnagar","Jasdan","Jetpur","Jhagadia","Jhalod","Jodia","Junagadh","Junagarh","Kalawad","Kalol","KapadWanj","Keshod","Khambat","Khambhalia","Khavda","Kheda","Khedbrahma","Kheralu","Kodinar","Kotdasanghani","Kunkawav","Kutch","Kutchmandvi","Kutiyana","Lakhpat","Lakhtar","Lalpur","Limbdi","Limkheda","Lunavada","M.M.Mangrol","Mahuva","Malia-Hatina","Maliya","Malpur","Manavadar","Mandvi","Mangrol","Mehmedabad","Mehsana","Miyagam","Modasa","Morvi","Muli","Mundra","Nadiad","Nakhatrana","Nalia","Narmada","Naswadi","Navasari","Nizar","Okha","Paddhari","Padra","Palanpur","Palitana","Panchmahals","Patan","Pavijetpur","Porbandar","Prantij","Radhanpur","Rahpar","Rajaula","Rajkot","Rajpipla","Ranavav","Sabarkantha","Sanand","Sankheda","Santalpur","Santrampur","Savarkundla","Savli","Sayan","Sayla","Shehra","Sidhpur","Sihor","Sojitra","Sumrasar","Surat","Surendranagar","Talaja","Thara","Tharad","Thasra","Una-Diu","Upleta","Vadgam","Vadodara","Valia","Vallabhipur","Valod","Valsad","Vanthali","Vapi","Vav","Veraval","Vijapur","Viramgam","Visavadar","Visnagar","Vyara","Waghodia","Wankaner"];
    let GujaratCityUser = [];
    for (let i = 0; i < Gujarat_State.length; i++) {
        const city = Gujarat_State[i];
        const cityUser = await UserAdd.find({ State: 'Gujarat', Citie: city.toString() }).count();
        GujaratCityUser.push({
            City: city,
            User: cityUser
        });
    }
    console.log(GujaratCityUser); 


    // --------------------------- Andaman_Nicobar  -----------------------------------------------


   let Andaman_Nicobar= ["Alipur","Andaman Island","Anderson Island","Arainj-Laka-Punga","Austinabad","Bamboo Flat","Barren Island","Beadonabad","Betapur","Bindraban","Bonington","Brookesabad","Cadell Point","Calicut","Chetamale","Cinque Islands","Defence Island","Digilpur","Dolyganj","Flat Island","Geinyale","Great Coco Island","Haddo","Havelock Island","Henry Lawrence Island","Herbertabad","Hobdaypur","Ilichar","Ingoie","Inteview Island","Jangli Ghat","Jhon Lawrence Island","Karen","Kartara","KYD Islannd","Landfall Island","Little Andmand","Little Coco Island","Long Island","Maimyo","Malappuram","Manglutan","Manpur","Mitha Khari","Neill Island","Nicobar Island","North Brother Island","North Passage Island","North Sentinel Island","Nothen Reef Island","Outram Island","Pahlagaon","Palalankwe","Passage Island","Phaiapong","Phoenix Island","Port Blair","Preparis Island","Protheroepur","Rangachang","Rongat","Rutland Island","Sabari","Saddle Peak","Shadipur","Smith Island","Sound Island","South Sentinel Island","Spike Island","Tarmugli Island"," Taylerabad","Titaije","Toibalawe","Tusonabad","West Island","Wimberleyganj","Yadita"];
   let andamanNicobarUser = [];

   for (let i = 0; i < Andaman_Nicobar.length; i++) {
       const city = Andaman_Nicobar[i];
       const cityUser = await UserAdd.find({ State: 'Andaman & Nicobar', Citie: city.toString() }).count();
       andamanNicobarUser.push({
           City: city,
           User: cityUser
       });
   }

//    --------------------------- Andhra Pradesh_State  -----------------------------------------------

   const Andhra_Pradesh_State = ["Achampet","Adilabad","Adoni","Alampur","Allagadda","Alur","Amalapuram","Amangallu","Anakapalle","Anantapur","Andole","Araku","Armoor","Asifabad","Aswaraopet","Atmakur","B. Kothakota","Badvel","Banaganapalle","Bandar","Bangarupalem","Banswada","Bapatla","Bellampalli","Bhadrachalam","Bhainsa","Bheemunipatnam","Bhimadole","Bhimavaram","Bhongir","Bhooragamphad","Boath","Bobbili","Bodhan","Chandoor","Chavitidibbalu","Chejerla","Chepurupalli","Cherial","Chevella","Chinnor","Chintalapudi","Chintapalle","Chirala","Chittoor","Chodavaram","Cuddapah","Cumbum","Darsi","Devarakonda","Dharmavaram","Dichpalli","Divi","Donakonda","Dronachalam","East Godavari","Eluru","Eturnagaram","Gadwal","Gajapathinagaram","Gajwel","Garladinne","Giddalur","Godavari","Gooty","Gudivada","Gudur","Guntur","Hindupur","Hunsabad","Huzurabad","Huzurnagar","Hyderabad","Ibrahimpatnam","Jaggayyapet","Jagtial","Jammalamadugu","Jangaon","Jangareddygudem","Jannaram","Kadiri","Kaikaluru","Kakinada","Kalwakurthy","Kalyandurg","Kamalapuram","Kamareddy","Kambadur","Kanaganapalle","Kandukuru","Kanigiri","Karimnagar","Kavali","Khammam","Khanapur (AP)","Kodangal","Koduru","Koilkuntla","Kollapur","Kothagudem","Kovvur","Krishna","Krosuru","Kuppam","Kurnool","Lakkireddipalli","Madakasira","Madanapalli","Madhira","Madnur","Mahabubabad","Mahabubnagar","Mahadevapur","Makthal","Mancherial","Mandapeta","Mangalagiri","Manthani","Markapur","Marturu","Medachal","Medak","Medarmetla","Metpalli","Mriyalguda","Mulug","Mylavaram","Nagarkurnool","Nalgonda","Nallacheruvu","Nampalle","Nandigama","Nandikotkur","Nandyal","Narasampet","Narasaraopet","Narayanakhed","Narayanpet","Narsapur","Narsipatnam","Nazvidu","Nelloe","Nellore","Nidamanur","Nirmal","Nizamabad","Nuguru","Ongole","Outsarangapalle","Paderu","Pakala","Palakonda","Paland","Palmaneru","Pamuru","Pargi","Parkal","Parvathipuram","Pathapatnam","Pattikonda","Peapalle","Peddapalli","Peddapuram","Penukonda","Piduguralla","Piler","Pithapuram","Podili","Polavaram","Prakasam","Proddatur","Pulivendla","Punganur","Putturu","Rajahmundri","Rajampeta","Ramachandrapuram","Ramannapet","Rampachodavaram","Rangareddy","Rapur","Rayachoti","Rayadurg","Razole","Repalle","Saluru","Sangareddy","Sathupalli","Sattenapalle","Satyavedu","Shadnagar","Siddavattam","Siddipet","Sileru","Sircilla","Sirpur Kagaznagar","Sodam","Sompeta","Srikakulam","Srikalahasthi","Srisailam","Srungavarapukota","Sudhimalla","Sullarpet","Tadepalligudem","Tadipatri","Tanduru","Tanuku","Tekkali","Tenali","Thungaturthy","Tirivuru","Tirupathi","Tuni","Udaygiri","Ulvapadu","Uravakonda","Utnor","V.R. Puram","Vaimpalli","Vayalpad","Venkatgiri","Venkatgirikota","Vijayawada","Vikrabad","Vinjamuru","Vinukonda","Visakhapatnam","Vizayanagaram","Vizianagaram","Vuyyuru","Wanaparthy","Warangal","Wardhannapet","Yelamanchili","Yelavaram","Yeleswaram","Yellandu","Yellanuru","Yellareddy","Yerragondapalem","Zahirabad"];
   let AndhraPradeshCityUser = [];

   for (let i = 0; i < Andhra_Pradesh_State.length; i++) {
       const city = Andhra_Pradesh_State[i];
       const cityUser = await UserAdd.find({ State: 'Andhra Pradesh', Citie: city.toString() }).count();
       AndhraPradeshCityUser.push({
           City: city,
           User: cityUser
       });
   }

  //    ---------------------------  Arunachal Pradesh State  -----------------------------------------------
 
   const Arunachal_Pradesh_State = ["Along","Anini","Anjaw","Bameng","Basar","Changlang","Chowkhem","Daporizo","Dibang Valley","Dirang","Hayuliang","Huri","Itanagar","Jairampur","Kalaktung","Kameng","Khonsa","Kolaring","Kurung Kumey","Lohit","Lower Dibang Valley","Lower Subansiri","Mariyang","Mechuka","Miao","Nefra","Pakkekesang","Pangin","Papum Pare","Passighat","Roing","Sagalee","Seppa","Siang","Tali","Taliha","Tawang","Tezu","Tirap","Tuting","Upper Siang","Upper Subansiri","Yiang Kiag"];
   let ArunachalPradeshCityUser = [];

   for (let i = 0; i < Arunachal_Pradesh_State.length; i++) {
       const city = Arunachal_Pradesh_State[i];
       const cityUser = await UserAdd.find({ State: 'Arunachal Pradesh', Citie: city.toString() }).count();
       ArunachalPradeshCityUser.push({
           City: city,
           User: cityUser
       });
   }
   
    res.render('Admin/AdminUserAnalies', {Gujarat:GujaratCityUser , AndamanNicobar:andamanNicobarUser , AndhraPradesh:AndhraPradeshCityUser , ArunachalPradesh:ArunachalPradeshCityUser});
}
module.exports = { UserAnalies}