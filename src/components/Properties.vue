
<template>

  <v-container class="pt-10">

    <v-row class="text-center align-center justify-center">

      <v-col cols="12">

        <h1>SMDC Premier</h1>
      </v-col>

    <v-container style="max-width:1000px;">

      <v-row>

        <v-col cols="12" md="3"
          v-for = "premier in Premier"
          :key = "premier.title"

        >

          <v-card  class="mx-auto" max-width="344">
              <v-img
                :src="premier.img"
                class="white--text align-end"

                height="100%"
                width="100%"

              >

              </v-img>

              <v-card-title>
      {{premier.title}}
    </v-card-title>

    <v-card-subtitle class="d-flex align-start " style="color:#dd9a61">
      {{premier.subtitle}}
    </v-card-subtitle>





            </v-card>
          </v-col>
      </v-row>
    </v-container>

    <v-col cols="12" >

      <h1>SMDC Properties</h1>
    </v-col>

    <v-container style="max-width:1000px;">

      <v-row>

        <v-col cols="12" md="3"
          v-for = "property in Properties"
          :key = "property.title"

        >

          <v-card  class="mx-auto" max-width="344" style="min-height:350px;">
              <v-img
                :src="property.img"
                class="white--text align-end"

                height="100%"
                width="100%"

              >

              </v-img>

              <v-card-title>
      {{property.title}}
    </v-card-title>

    <v-card-subtitle class="d-flex align-start " style="color:#dd9a61">
      {{property.subtitle}}
    </v-card-subtitle>





            </v-card>
          </v-col>
      </v-row>
    </v-container>




    </v-row>
  </v-container>

</template>

<script>
export default {

  data(){

return{
  Premier: [

    {

      img: 'https://smdc.com/content/uploads/2018/08/Air-Residences-Thumbnail.jpg',
      title:  'Air Residences',
      subtitle: 'MAKATI CITY',
    },

    {

      img: 'https://smdc.com/content/uploads/2018/08/CoastIcon.jpg',
      title:  'Cost Residences',
      subtitle: 'ROXAS BOULEVARD',
    },

    {

      img: 'https://smdc.com/content/uploads/2018/08/FameIcon.jpg',
      title:  'Fame Residences',
      subtitle: 'MANDALUYONG',
    },

    {

      img: 'https://smdc.com/content/uploads/2019/04/GlamNew2-Thumbnail-2.jpg',
      title:  'Glam Residences',
      subtitle: 'EDSA, QUEZON CITY',
    },

    {

      img: 'https://smdc.com/content/uploads/2019/11/Gold-Thumbnail3.jpg',
      title:  'Gold Residences',
      subtitle: 'SUCAT, PARANAQUE',
    },


    {

      img: 'https://smdc.com/content/uploads/2019/01/Lush-SMDC-Logo1-1.jpg',
      title:  'Lush Residences',
      subtitle: 'MAKATI CITY',
    },

    {

      img: 'https://smdc.com/content/uploads/2018/08/Red-ThumnailLogo.jpg',
      title:  'Red Residences',
      subtitle: 'CHINO ROCES, MAKATI CITY',
    },


    {

      img: 'https://smdc.com/content/uploads/2018/08/SresidencesIcon.jpg',
      title:  'S Residences',
      subtitle: 'MALL OF ASIA COMPLEX',
    },

    {

      img: 'https://smdc.com/content/uploads/2019/03/SailResidencesNew-Logo.jpg',
      title:  'Sail Residences',
      subtitle: 'MALL OF ASIA COMPLEX',
    },
  ],

  Properties: [

    {img: 'https://smdc.com/content/uploads/2018/08/BerkeleyThumbnail.jpg',title:  'Berkeley Residences',subtitle: 'KATIPUNAN AVENUE',},
    {img: 'https://smdc.com/content/uploads/2018/08/BloomIcon-copy-copy-copy.jpg',title: 'Bloom Residences', subtitle: ' SUCAT PARANAQUE',},
    {img: 'https://smdc.com/content/uploads/2018/08/BlueIcon.jpg',title:  'Blue Residences',subtitle: 'KATIPUNAN AVENUE',},
    {img: 'https://smdc.com/content/uploads/2018/08/Breeze_Thumbnail.jpg',title:  'Breeze Residences',subtitle: 'ROXAS BOULEVARD',},
    {img: 'https://smdc.com/content/uploads/2018/08/Charm-Thumbnail1.jpg',title:  'Charm Residences',subtitle: 'FELIX AVENUE,CAINTA',},
    {img: 'https://smdc.com/content/uploads/2018/08/Chateau_Thumbnail.jpg',title:  'Chateau Elysee',subtitle: 'BICUTAN PARANAQUE CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Cheer-Thumbnail.jpg',title:  'Cheer Residences',subtitle: 'SM CITY MARILAO,BULACAN',},
    {img: 'https://smdc.com/content/uploads/2018/08/Cheerful_Thumbnail.png',title:  'Cheerful Homes',subtitle: 'MABALACAT,PAMPANGA',},
    {img: 'https://smdc.com/content/uploads/2020/05/Field-Thumbnail.jpg',title:  'Field Residences',subtitle: 'SUCAT PARANAQUE CITY',},
    {img: 'https://smdc.com/content/uploads/2020/07/Gem-Thumbnail.jpg',title:  'Gem Residences',subtitle: 'PASIG CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Grace_Thumbnail.jpg',title:  'Grace Residences',subtitle: 'TAGUIG CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/grass_thumbnail.png',title:  'Grass Residences',subtitle: 'QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Green-2-Dasmarinas-Cavite.jpg',title:  'Green 2 Residences',subtitle: 'DASMARINAS CAVITE',},
    {img: 'https://smdc.com/content/uploads/2018/08/green_thumbnail.jpg',title:  'Green Residences',subtitle: 'NOVALICHES,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2019/04/HillThumbnailLogo.jpg',title:  'Hill Residences',subtitle: 'NOVALICHES,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2020/07/HopeNew-Thumbnail.jpg',title:  'Hope Residences',subtitle: 'SM CITY,MARTIRES',},
    {img: 'https://smdc.com/content/uploads/2018/08/Jazz_thumbnail.jpg',title:  'Jazz Residences',subtitle: 'BEL-AIR,MAKATI CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Lane-Thumbnail.jpg',title:  'Lane Residences',subtitle: 'SM LANANG PREMIER,DAVAO CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Leaf-Thumbnail.jpg',title:  'Leaf Residences',subtitle: 'SUSANA HEIGHTS,MUNTINLUPA',},
    {img: 'https://smdc.com/content/uploads/2019/08/Light2-ThumbnailLogo.jpg',title:  'Light 2 Residences',subtitle: 'MANDALUYONG CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/light_thumbnail.jpg',title:  'Light Residences',subtitle: 'EDSA-BONI MRT STATION',},
    {img: 'https://smdc.com/content/uploads/2018/08/Mezza-II-Quezon-City.jpg',title:  'Mezza || Residences',subtitle: 'AURORA BLVD,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Mezza-Residences-Quezon-City.jpg',title:  'Mezza Residences',subtitle: 'AURORA BLVD,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/M-Place-Quezon-City.jpg',title:  'MPlace at South Triangle',subtitle: 'SOUTH TRIANGLE,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Park-Thumbnail.jpg',title:  'Park Residences',subtitle: 'SANTA ROSA CITY, LAGUNA',},
    {img: 'https://smdc.com/content/uploads/2018/08/Princeton-Quezon-City.jpg',title:  'Princeton Residences',subtitle: 'AURORA BLVD,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Sea-Residences-Pasay-City.jpg',title:  'Sea Residences',subtitle: 'MALL OF ASIA PASAY CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/Shell-Residences-Pasay-City.jpg',title:  'Shell Residences',subtitle: 'MALL OF ASIA PASAY CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/ShineIcon.jpg',title:  'Shine Residences',subtitle: 'RENAISSANCE CENTER,ORTIGAS',},
    {img: 'https://smdc.com/content/uploads/2018/08/Shore-Residences-Pasay-City.png',title:  'Shore Residences',subtitle: 'MALL OF ASIA,PASAY CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Smile-Thumbnail.jpg',title:  'Smile Residences',subtitle: 'SM CITY BACOLOD',},
    {img: 'https://smdc.com/content/uploads/2020/05/South-Thumbnail.jpg',title:  'South Residences',subtitle: 'LAS PINAS CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Spring-Thumbnail.jpg',title:  'Spring Residences',subtitle: 'BICUTAN,PARANAQUE CITY',},
    {img: 'https://smdc.com/content/uploads/2019/05/Style-Thumbnail.jpg',title:  'Style Residences',subtitle: 'ILOILO CITY',},
    {img: 'https://smdc.com/content/uploads/2018/08/SunIcon.jpg',title:  'Sun Residences',subtitle: 'ESPANA AVENUE,QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Trees-Thumbnail.jpg',title:  'Tree Residences',subtitle: 'NOVALICHES QUEZON CITY',},
    {img: 'https://smdc.com/content/uploads/2020/05/Vine-Thumbnail.jpg',title:  'Vine Residences',subtitle: 'SM CITY,NOVALICHES',},
    {img: 'https://smdc.com/content/uploads/2018/08/Wind-Residences-Tagaytay-City.png',title:  'Wind Residences',subtitle: 'TAGAYTAY CITY',},





  ]

}
}

}
</script>

<style lang="css" scoped>
</style>
