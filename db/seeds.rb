# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do
  puts "Destroying tables..."

  Product.destroy_all
  User.destroy_all
  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!("users")
  ApplicationRecord.connection.reset_pk_sequence!("products")

  puts "Creating Users..."

  demo_user = User.create(
    email: "demo_user@gmail.com",
    username: "Demo_User",
    password: "password"
  )

  puts "Creating Products..."

  air_force_1 = Product.create(
    name: "Air Force 1",
    brand: "Nike",
    price: 110,
    description: "This is what legends are made of. The Nike Air Force 1 LE brings back the ’82 hardwood icon into an everyday style in all-white or all-black. The durability, feel and Air are still there for those who love a classic."
  )

  air_force_1_photo_1 = {
    io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_air_force_photo1.webp"),
    filename: "nike_air_force_photo1.webp"
  }

  air_force_1_photo_2 = {
    io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_air_force_photo2.webp"),
    filename: "nike_air_force_photo2.webp"
  }

  air_force_1.photos.attach([air_force_1_photo_1, air_force_1_photo_2])



  nike_metcon_7 = Product.create(
    name: "Nike Metcon 7",
    brand: "Nike",
    price: 110,
    description: "The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR."
  )
   
  nike_metcon_7_photo_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_metcon7_photo1.webp"),
  filename: "nike_metcon7_photo1.webp"
  }


nike_metcon_7_photo_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_metcon7_photo2.webp"),
  filename: "nike_metcon7_photo2.webp"
  }

nike_metcon_7.photos.attach([nike_metcon_7_photo_1, nike_metcon_7_photo_2])

stan_smith_shoe = Product.create(
  name: "Stan Smith Shoes",
  brand: "adidas",
  price: 76,
  description: "Millions of people have laced into adidas Stan Smith sneakers since the '70s, and every person puts their own spin on the look. So simple, versatile and fresh, these classic shoes adapt effortlessly. They can be dressed up or down. They look just as good on runways as on city streets. So wherever you wear this pair, you can count on them to help express your personal style. We made them, but you get to make them your own.

  Made in part with recycled content generated from production waste, e.g., cutting scraps, and post-consumer household waste to avoid the larger environmental impact of producing virgin content."
)

stan_smith_shoe_photo_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/adidas_stansmith_photo1.webp"),
  filename: "adidas_stansmith_photo1.webp"
}

stan_smith_shoe_photo_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/adidas_stansmith_photo2.webp"),
  filename: "adidas_stansmith_photo2.webp"
}

stan_smith_shoe.photos.attach([stan_smith_shoe_photo_1, stan_smith_shoe_photo_2])

nmd_r1_primeblue_shoe = Product.create(
  name: "NMD_R1 PRIMEBLUE SHOES",
  brand: "adidas",
  price:   150,
  description:"Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed '80s runner from the adidas archive, these modern sneakers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort. Bold color and signature midsole plugs make a statement, so wherever you're headed, you're sure to show up in style.

  This product is made with Primeblue, a high-performance recycled material made in part with Parley Ocean Plastic. 50% of the upper is textile, 75% of the textile is Primeblue yarn. No virgin polyester."
)

nmd_r1_primeblue_shoe_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nmd_primeblue_photo1.webp"),
  filename: "nmd_primeblue_photo1.webp"
 }

nmd_r1_primeblue_shoe_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nmd_primeblue_photo2.webp"),
  filename: "nmd_primeblue_photo2.webp"
 }


nmd_r1_primeblue_shoe.photos.attach([nmd_r1_primeblue_shoe_photos_1, nmd_r1_primeblue_shoe_photos_2])

mens_ua_hovr_turbulence_running_shoes = Product.create(
  name: "Men's UA HOVR™ Turbulence Running Shoes",
  brand: "underarmour",
  price: 70,
  description: "Distance runners need a perfect mix of cushion, bounce, durability, and efficiency. And that's exactly what you're getting with the UA HOVR™ Turbulance—responsive cushioning, a smooth ride, and miles of comfort."
)

mens_ua_hovr_turbulence_running_shoes_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/underarmor_uahovr_photo1.webp"),
  filename: "underarmor_uahovr_photo1.webp"
}

mens_ua_hovr_turbulence_running_shoes_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/underarmor_uahovr_photo2.webp"),
  filename: "underarmor_uahovr_photo2.webp"
}

mens_ua_hovr_turbulence_running_shoes.photos.attach([mens_ua_hovr_turbulence_running_shoes_photos_1,mens_ua_hovr_turbulence_running_shoes_photos_2])

club_c_85_vintage_shoe = Product.create(
  name:  "Club C 85 Vintage Shoes",
  brand: "Reebok",
  price:  85,
  description: "Talking their cue from the '80s court classic, these shoes are all about simplicity. They have a leather upper and a timeless easy-to-wear style. The EVA midsole gives you lightweight cushioning."
 )

club_c_85_vintage_shoe_photos_1 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/reebok_c_club_photo1.webp"),
  filename: "reebok_c_club_photo1.webp"
 }

club_c_85_vintage_shoe_photos_2 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/reebok_c_club_photo2.webp"),
  filename: "reebok_c_club_photo2.webp"
}

club_c_85_vintage_shoe.photos.attach([club_c_85_vintage_shoe_photos_1, club_c_85_vintage_shoe_photos_2])


air_jordan_1_mid_shoes =Product.create(
  name:  "Air Jordan 1 Mid Shoes",
  brand:  "nike",
  price:  125,
  description: "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.
 "
 )

air_jordan_1_mid_shoes_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_airjordan_photo1.webp"),
  filename: "nike_airjordan_photo1.webp"
 }

air_jordan_1_mid_shoes_photos_2 ={
 io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_airjordan_photo2.webp"),
 filename:"nike_airjordan_photo2.webp"
}
 
air_jordan_1_mid_shoes.photos.attach([air_jordan_1_mid_shoes_photos_1,air_jordan_1_mid_shoes_photos_2])

nike_blazer_mid_77_vintage =Product.create(
  name: "Nike Blazer Mid '77 Vintage",
  brand: "nike",
  price: 105,
  description: "In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning."
 )

nike_blazer_mid_77_vintage_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_blazer_photo1.webp"),
  filename: "nike_blazer_photo1.webp"
 }

nike_blazer_mid_77_vintage_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_blazer_photo2.webp"),
  filename: "nike_blazer_photo2.webp"
 }

nike_blazer_mid_77_vintage.photos.attach([nike_blazer_mid_77_vintage_photos_1,nike_blazer_mid_77_vintage_photos_2])


nike_air_vapormax_plus =Product.create(
  name: "Nike Air VaporMax Plus",
  brand: "nike",
  price: 178,
  description: "The Nike Air VaporMax Plus looks to the past and propels you into the future. Nodding to the 1998 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up the comfort and create a modern look."
 )


nike_air_vapormax_plus_photos_1 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_vapormax_photo1.webp"),
  filename: "nike_vapormax_photo1.webp"
 }

nike_air_vapormax_plus_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_vapormax_photo2.webp"),
  filename: "nike_vapormax_photo2.webp"
 }

nike_air_vapormax_plus.photos.attach([nike_air_vapormax_plus_photos_1,nike_air_vapormax_plus_photos_2])


nike_zoomx_invincible_run_flyknit_2 = Product.create(
 name: " Nike ZoomX Invincible Run Flyknit 2",
 brand: "nike",
 price: 180,
 description: "Avoiding injury is crucial no matter if you’re tackling a 20-miler in the middle of marathon prep or stockpiling tempo runs together. Specifically designed to offset the attrition of your toughest trainings, these shoes boast a stack of mattress-like cushioning to help you stay on your feet today, tomorrow and beyond. An unbelievable sense of springy propulsion entices you into taking another stride (and then another) for responsive comfort that lets you focus on your run—not the potential repercussions."
)

nike_zoomx_invincible_run_flyknit_2_photos_1={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_zoomxinvincible_photo1.webp"),
  filename: "nike_zoomxinvincible_photo1.webp"
}

nike_zoomx_invincible_run_flyknit_2_photos_2 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/nike_zoomxinvincible_photo2.jpeg"),
  filename: "nike_zoomxinvincible_photo2.jpeg"
}

nike_zoomx_invincible_run_flyknit_2.photos.attach([nike_zoomx_invincible_run_flyknit_2_photos_1,
nike_zoomx_invincible_run_flyknit_2_photos_2])

superstar_shoes =Product.create(
  name: "440 SUPERSTAR SHOES",
  brand: "adidas",
  price: 65,
  description: "From the basketball court to the classroom. Everyone deserves a pair of adidas Superstars Shoes. This kids' version celebrates 50 years of the classic shell-toe design. From the distinctive serrated 3-Stripes to the comfortable rubber cupsole, this anniversary edition honors an icon. Whether they sport all white, all black or something in between, these shoes keep little ones looking fresh."
 )

superstar_shoes_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/440_superstar_shoes_photo1.webp"),
  filename: "440_superstar_shoes_photo1.webp"
}

superstar_shoes_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/440_superstar_shoes_photo2.webp"),
  filename: "440_superstar_shoes_photo2.webp"
}

superstar_shoes.photos.attach([superstar_shoes_photos_1,superstar_shoes_photos_2])

samba_classic_shoes =Product.create(
  name: "SAMBA CLASSIC SHOES",
  brand: "adidas",
  price: 60,
  description: "Getting up and down the field with speed is the name of the indoor game. The Samba has dominated indoor soccer for decades for a reason. This kids' version of the legendary soccer shoes features a leather upper and a lightweight EVA midsole for better response on indoor surfaces."
  )

samba_classic_shoes_photos_1 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/samba_classic_photo1.webp"),
  filename: "samba_classic_photo1.webp"
}

samba_classic_shoes_photos_2 = {
io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/samba_classic_photo2.webp"),
filename: "samba_classic_photo2.webp"
}

samba_classic_shoes.photos.attach([samba_classic_shoes_photos_1,samba_classic_shoes_photos_2])

mens_ua_hovr_phantom_3_reflect_running_shoes = Product.create(
  name: "Men's UA HOVR™ Phantom 3 Reflect Running Shoes",
  brand: "underarmor",
  price: 98,
  description: "The off-season is for getting better. That means lots of running. Fast, stretchy UA HOVR™ Phantom 3 helps you explode through interval after interval with even more energy-returning UA HOVR™ cushioning. Run now…win later."
 )

mens_ua_hovr_phantom_3_reflect_running_shoes_photos_1 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/underarmor_uahovr_photo1.webp"),
  filename: "underamror_phantom3_reflect_photo1.jpeg"
}

mens_ua_hovr_phantom_3_reflect_running_shoes_photos_2 = {
io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/underarmor_uahovr_photo2.webp"),
filename: "underarmor_phantom3_reflect_photo2.webp"
}


mens_ua_hovr_phantom_3_reflect_running_shoes.photos.attach([mens_ua_hovr_phantom_3_reflect_running_shoes_photos_1,mens_ua_hovr_phantom_3_reflect_running_shoes_photos_2])

fresh_foam_x_1080v12 = Product.create(
  name: "Fresh Foam X 1080v12",
  brand: "New Balance",
  price:  159,
  description: "This model runs large, compared to previous versions. You may consider ordering down from your normal size.

  If we only made one running shoe, that shoe would be the 1080. What makes the 1080 unique isn’t just that it’s the best running shoe we make, it’s also the most versatile. The 1080 delivers top-of-the-line performance to every kind of runner, whether you’re training for world-class competition, or catching a rush hour train. The Fresh Foam X 1080v12 represents a consistent progression of the models signature qualities"
)
 
fresh_foam_x_1080v12_photos_1 ={
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/newbalance_photo1.webp"),
  filename: "newbalance_photo1.webp"
}

fresh_foam_x_1080v12_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/newbalance_photo2.webp"),
  filename: "newbalance_photo2.webp"
}

fresh_foam_x_1080v12.photos.attach([fresh_foam_x_1080v12_photos_1,fresh_foam_x_1080v12_photos_2])

 chuck_taylor_all_star_classic =Product.create(
 name: " Chuck Taylor All Star Classic",
 brand: "Converse",
 price: 65,
 description: "Its how and where you take your Chucks. The legacy is long, but what comes next is up to you. We just make the shoe. You make the stories"
)
 
chuck_taylor_all_star_classic_photos_1 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/converse_photo1.jpeg"),
  filename: "converse_photo1.jpeg"
 }
 
chuck_taylor_all_star_classic_photos_2 = {
  io: URI.open("https://sneakerz-home-dev.s3.us-west-1.amazonaws.com/converse_photo2.jpeg"),
  filename: "converse_photo2.jpeg"
 }

chuck_taylor_all_star_classic.photos.attach([chuck_taylor_all_star_classic_photos_1,chuck_taylor_all_star_classic_photos_2])


  puts "Done"

end
