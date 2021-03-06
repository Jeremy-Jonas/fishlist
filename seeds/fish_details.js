exports.seed = (knex) =>
  knex('fish_details').del()
    .then(() =>
      knex('fish_details').insert(
        [
          {
            fish_id: 1,
            description: 'Paua (known as abalone) in other parts of the world but are different species are a New Zealand icon and are beautiful eating.  They are a monovalve, one shell, mollusc and look like a rock under water because of growth on their shells.  Inside the shell however is the beautiful nacre used to make jewellery and other ornaments.  Mature Paua average 7-14cm but can grow to 18cm.',
            image: 'https://moana.co.nz/wp-content/uploads/2015/10/Blue-Abalone1.jpg',
            link: 'https://en.wikipedia.org/wiki/P%C4%81ua',
            video: ' https://www.youtube.com/watch?v=f01uAAAFUVY'
          },
          {
            fish_id: 2,
            description: 'Cockles (maori name: tuangi), are widespread in New Zealand harbours and estuaries from the mean tide level to low tide. In the Inlet cockles can grow up to 60mm wide and can live for up to 20 years.',
            image: 'https://www.radionz.co.nz/assets/news/30376/eight_col_cockle.jpg?1419134410',
            link: 'https://en.wikipedia.org/wiki/Cockle_(bivalve)',
            video: 'https://www.youtube.com/watch?v=xraKDDIrqUg'
          },
          {
            fish_id: 3,
            description: 'The New Zealand kingfish, also known as kingi or yellowtail, is found from the Kermadec Islands to Banks Peninsula during the summer months. In the wild they can reach 1.7 m in length and weigh up to 56 kg. The common name “yellowtail” comes from their bright yellow fins but they also have a distinctive golden-brown stripe running from the snout to the tail.',
            image: 'http://www.pir.sa.gov.au/__data/assets/image/0004/285961/varieties/preview.jpg',
            link: 'https://en.wikipedia.org/wiki/Yellowtail_amberjack',
            video: 'https://www.youtube.com/watch?v=Up8EkzZJ7uU'
          },
          {
            fish_id: 4,
            description: 'Kahawai are found throughout New Zealand but are more common north of Kaikoura. They vary from grey-blue to blue-green above and are silvery beneath with scattered dark grey spots on the back and flanks. Most kahawai have an average size between 40-50cm long and an average weight of 1 to 2kg.',
            image: 'https://www.fishing.net.nz/default/assets/Image/Fishing/Surfcasting-kahawai-558-04.jpg',
            link: 'https://en.wikipedia.org/wiki/Arripis_trutta',
            video: ' https://www.youtube.com/watch?v=7X4jLd33Wto'
          },
          {
            fish_id: 5,
            description: 'Grey mullet have a worldwide distribution and New Zealand is at the southern limit of their range. Hence, they are mainly found in the North Island, and only in the Cook Strait area during the summer months. They have two dorsal fins, the first being tall with four obvious spines and also have large, easily dislodged scales. They commonly reaching 500 mm in length and under 1kg in weight.',
            image: 'http://bestfishguide.org.nz/wp-content/uploads/2016/06/Yellow-eyed-Mullet-Web.png',
            link: 'https://en.wikipedia.org/wiki/Flathead_grey_mullet',
            video: 'https://www.youtube.com/watch?v=QsCBWjrEJdM'
          },
          {
            fish_id: 6,
            description: 'Butterfish are found only around the New Zealand coast, and are widespread, feeding on kelp beds over shallow rocky outcrops. They are also referred to as greenbone because of their bright green bones and are a slender fish with a pointed snout. Body colour varies according to size and sex. Adults are brown to olive green. Breeding males are bright blue with a light blue stripe on the head. The body is streamlined and plump with large anal and dorsal fins, a pointed head, and a small mouth. Average size is 30–50cm, reaching 70cm.',
            image: 'https://www.doc.govt.nz/contentassets/1becfa08284f4101bf20705acd34f6fd/butterfish-800.jpg',
            link: 'https://en.wikipedia.org/wiki/Greenbone',
            video: 'https://www.youtube.com/watch?v=XT5tuvBPP8Y'
          },
          {
            fish_id: 7,
            description: 'The striped marlin (Family Istiophoridae) is a large, oceanic fish with a long, round bill, small teeth and tall dorsal fin which decreases in height ending just before the second dorsal fin. The striped marlin is the most common of the larger game fish found in the waters around The Bay of Islands. Our New Zealand striped marlins are amongst  the largest in the world, with  the weight range of these fish being between 70 and 220 kg and a length of up to  four metres. Most current and past world records for Striped Marlin were set in New Zealand, with the Bay of Islands boasting many of them.  The heaviest striped marlin ever recorded is 224.1 kg and is  the current New Zealand and world record.',
            image: 'http://www.animalspot.net/wp-content/uploads/2011/11/Striped-Marlin-Images.jpeg',
            link: 'https://swfsc.noaa.gov/textblock.aspx?Division=FRD&ParentMenuId=141&id=1126',
            video: 'https://www.youtube.com/watch?v=ZV50r0NXLBY'
          },
          {
            fish_id: 8,
            description: 'Tarakihi are among the most popular bottom fish of south Australia and New Zealand. They are small, easy to catch and make for great table fare. These bottom dwellers can be compared to Pink Snappers, however they only grow to a fraction of Squire sizes. They are schooling fish normally present over reefy/rocky bottoms up to 100m deep, but also caught from the shore at certain locations. Tarakihi are quite small, rarely growing over 1.5kg.',
            image: 'http://fishesofaustralia.net.au/Images/Image/NemadactMacroptRK.jpg',
            link: 'https://fishingbooker.com/fish/tarakihi',
            video: 'https://www.youtube.com/watch?v=PzbXJFYAVZk'
          },
          {
            fish_id: 9,
            description: 'Whitebait is a collective term for the immature fry of fish, typically between 1 and 2 inches (25 and 50 mm) long. Such young fish often travel together in schools along the coast, and move into estuaries and sometimes up rivers where they can be easily caught with fine meshed fishing nets. Whitebaiting is the activity of catching whitebait.',
            image: 'https://docnz.files.wordpress.com/2018/08/whitebait.jpg?w=580&h=378',
            link: 'https://en.wikipedia.org/wiki/Whitebait',
            video: 'https://www.youtube.com/watch?v=X99HkCJy85o'
          },
          {
            fish_id: 10,
            description: 'Blue cod belong to the Pinguipedidae family and are by far the most popular recreational target species in the South Island. Typically a slow-moving fish, blue cod swim mainly propelled by their pectoral fins in a distinctive sculling motion, but are capable of sudden bursts of speed using their tail when required. Blue cod are not a schooling fish but are fairly easy to hunt as they are very inquisitive by nature and do not spook easily. They are best hunted during October to March, but the main season is April to September. The colour of blue cod changes with size; juveniles (5−15cm long) have a whitish body with two brown stripes running the entire length. Maturing fish darken to a rusty- brown and the stripes become barely distinguishable. Beyond 25cm both sexes change colour to a mottled grey, which lasts until about 30cm, when a further change to green or blue occurs. ',
            image: ' https://dev2.freshcatch.co.nz/wp-content/uploads/2017/07/blue-cod.png',
            link: 'https://www.oceanhunter.co.nz/NEED+TO+KNOW/Species+Identification/Blue+Cod.html',
            video: 'https://www.youtube.com/watch?v=QIzT35Jil04'
          },
          {
            fish_id: 11,
            description: 'Elephantfish have an elongate body, a long snout with a broad, flexible hoe-shaped snout process, two widely-separated dorsal fin a single gill opening and plate like teeth in the jaws.. The head has a series of well-developed sensory pores and obvious mucous canals. Fins: Two widely separated dorsal fins, the first triangular in shape and preceded by a stout serrated spine, the second highest anteriorly and relatively short-based. A high, short-based anal fin is located midway between the large pectoral fins and the heterocercal tail (has a long upper lobe). The elephantfishes are a diverse family, with a wide range of different sizes and shapes. The smallest are just 5 centimetres (2.0 in) in adult length, while the largest reach up to 1.5 metres (4.9 ft).',
            image: 'https://www.radionz.co.nz/assets/news/107763/eight_col_Elephant_Shark_Picture_2.3MB.JPG?1493242238',
            link: 'http://fishesofaustralia.net.au/home/species/1986#summary',
            video: ' https://www.youtube.com/watch?v=PyYCLD3QFqE'
          },
          {
            fish_id: 12,
            description: 'New Zealand red snapper (Maori name: tāmure) are most common around the North Island and upper South Island, especially in Tasman Bay. The species is one of the largest and most valuable coastal fisheries. Golden-pink to tones of red above, flecked with blue spots, with the colour paling to white on the belly. Snapper found in muddy harbours tend to be pale pink. The average size is 30–50cm, reaching 100cm and the average weight is 1–2.5kg, up to 19kg.',
            image: 'http://leefishusa.com/wp-content/uploads/2012/12/Snapper-whole-fish.jpg',
            link: 'https://en.wikipedia.org/wiki/Australasian_snapper',
            video: 'https://www.youtube.com/watch?v=noF3dswA-TQ'
          },
          {
            fish_id: 13,
            description: 'Nothing fishy here. Just great taste, Omega-3s and no cholesterol.',
            image: 'https://shop.countdown.co.nz/Content/ProductImages/zoom/842234001664.jpg/Gardein-Meat-Free-Vegetarian-Meal-Vegan-Fishless-Fillets.jpg',
            link: 'https://shop.countdown.co.nz/shop/productdetails?stockcode=743739',
            video: 'https://www.youtube.com/watch?v=FsOv__kQi28'
          }
        ]
      )
    )
