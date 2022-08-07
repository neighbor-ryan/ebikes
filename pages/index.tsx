import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Markdown from "../src/md";

const md = `
# Table of contents

* [E-bikes are a Transportation Revolution](README)
* [Background](background)
* [My E-Bikes / Specs](bikes)
* [Reflections](reflections)
* [Getting Started](getting-started)
* [Gear / Accessories](gear)
* [Documenting Rides](documenting-rides)

---

# E-bikes are a Transportation Revolution

![4 e-bikes on the Hoboken waterfront](/renamed-imgs/ebikes-nyc-skyline.png)

## Index <a id="toc"></a>

* [Background](background): bike-sharer → bike-owner → e-bike maniac
* [My e-bikes](bikes)
  * [Overview/Specs](bikes#specs): weights between 35-60lbs, ranges from 25-130mi, prices from $1900-$7000 \\($2500-$8000 incl. gear\\)
  * [VanMoof X3](bikes#x3): great all-around / starter / city e-bike
  * [Brompton Electric](bikes#e-brompton): smallest fold, most portable, great all around
  * [Tern Vektron Q9](bikes#q9): large cargo capacity, folds up for easy storage
  * [Specialized Creo Comp Carbon](bikes#creo): light, fast, long-range
* [Reflections](reflections)
  * [Speed ⟹ Safety](reflections#speed-safety): higher top speed – and acceleration – make a big difference in traffic
  * [Speed ⟹ Inclusion](reflections#speed-inclusion): a lot more people can get around quickly+comfortably on ebikes
  * [Speed ⟹ Convenience](reflections#speed-convenience): ebikes are as fast as cars in urban environments; can solve congestion and parking issues
  * [Space](reflections#space): high mobility per unit space; combine with other modes \\(trains, buses, ferries\\)
    * [Bike vs. Car Storage](reflections#bike-vs-car-storage): parking takes too much space in cities, and is heavily subsidized; bike parking is 5-10x more efficient
  * [Cost](reflections#cost): the average car cost could fund e-bikes for 10 families
  * [Cargo](reflections#cargo):
    * [Groceries, Bulk Items](reflections#groceries): basically any grocery run, and a surprising number of bulk item moves, can be done via e-bike
    * [Kids](reflections#kids): easy to carry 1 or 2 kids by e-bike
    * [PoV: Grocery Runs](reflections#groceries): I get groceries by e-bike and it's great
    * [PoV: Moving House](reflections#pov-moving-house): I moved across town – with 2wks of stuff – by ebike
  * [Health](reflections#health)
  * [Fun](reflections#fun)
  * [Car sewers](reflections#car-sewers): cars make streets miserable for everyone not in a car; doing this to 100% of streets is extreme, and terrible policy.
* [Getting Started](getting-started)
  * [Bike Shares](getting-started#bike-shares): easy way to get used to city biking/scooting \\(if unfamiliar\\)
  * [Renting](getting-started#renting): rent a few types of bikes before buying one
  * [Safety](getting-started#safety)
    * [Stats](getting-started#stats)
    * [Speed](getting-started#safety-speed)
    * [Fear](getting-started#fear)
    * [Riding on Sidewalks](getting-started#riding-on-sidewalks)
    * [Stopping at Stop Signs / Red Lights](getting-started#stopping-at-stops)
    * [Braking](getting-started#braking): [Sheldon Brown on front brakes](https://www.sheldonbrown.com/brakturn.html)
    * [Helmets](getting-started#helmets-safety): can't hurt, but often used to blame/criminalize cyclists for infrastructure/engineering problems
    * [Lights](getting-started#lights-safety): the more the better
    * [Hi-Viz Clothing](getting-started#hi-viz): similar to helmets; good practice, but often discussed unfairly
  * [Route Planning](getting-started#route-planning): [Street View](getting-started#street-view), [Ride with GPS](getting-started#ride-with-gps), [Strava](getting-started#strava-route-planning) all useful
  * [Traveling with E-bikes](getting-started#travel): [flying](getting-started#flying) generally not possible \\(might work with e-brompton\\); [trains/boats](getting-started#trains-boats) generally easy/possible
  * [Starter Packs](getting-started#starter-packs)
    * [VanMoof X3 + Gear](getting-started#vanmoof-x3-pack): $83/mo \\(incl. maintenance/theft/insurance coverage\\), $3k outright
    * [RadPower](getting-started#radpower): popular under $2k
  * [Reading](getting-started#reading)
    * [ElectricBikeReview.com](getting-started#ebr)
    * [r/ebikes](getting-started#r-ebikes)
* [Gear](gear): 10-20% a bike's cost in add-ons can make it 10x more useful
  * [Helmets](gear#helmets): I use [a Lumos "Kickstart"](https://lumoshelmet.co/products/lumos-kickstart) helmet with lights built in
  * [Racks, Baskets](gear#racks-baskets): starting point for carrying bags' worth of stuff on rides
  * [Bags](gear#bags): get weight off of you and onto the bike, where it _rolls_
    * [Panniers](gear#panniers): bags that hang from sides of back rack; can be quite large, very useful
    * [Cockpit Bags](gear#cockpit-bags): smaller bags up around your handlebars for essentials
    * [Frame Bags](gear#top-tube-bags): small/medium bags attached to the frame
    * [Back-Rack / Seat Bags](gear#back-bags): medium bags on top of back rack or behind+underneath seat
  * [Phone Mounts](gear#phone-mounts): phone mounted up front \\(e.g. w/ turn-by-turn directions\\) is surprisingly useful; I use [Quad Lock](https://www.quadlockcase.com/).
  * [Lights](gear#lights): [front](https://www.amazon.com/gp/product/B07544KPJL/), [rear](https://www.amazon.com/gp/product/B07YFDFXY4/), [party](https://www.amazon.com/gp/product/B07G36BT9P/), [Vont 'Pyro' \\(set\\)](https://www.amazon.com/gp/product/B078TB9TMK/), [KNOG \\(set\\)](https://www.amazon.com/KNOG-12144-Plus-Twinpack-Black/dp/B07CYNMD6M/)
  * [Locks](gear#locks): [Kryptonite U-lock + cable](https://www.amazon.com/dp/B06XZT8KZ1/) \\(medium weight, decent security\\), [OnGuard U-Lock](https://www.amazon.com/gp/product/B008OHBE8S/) \\(lighter / more clearance but weaker\\), [OTTO cable lock](https://www.amazon.com/gp/product/B0799DBYBH/) \\(compact+light extra security layer\\)
  * [Misc. Accessories](gear#misc-accessories): [bell](https://www.amazon.com/gp/product/B07DFF49R4/), rear-view mirrors \\([1](https://www.amazon.com/gp/product/B07G5H2RSM/) [2](https://www.amazon.com/gp/product/B07V5DJR8Z/)\\), [kickstand](https://www.amazon.com/gp/product/B00LNLXML4/), [hand pump](https://www.amazon.com/gp/product/B008R5MDQE/)
  * [Gloves](gear#gloves): [padded gloves](https://www.amazon.com/gp/product/B07B3PX6TC/), [light but warm winter gloves](https://www.jackrabbit.com/brooks-lsd-thermal-glove---color%3A-black-size%3A-s/609465426438.html)
  * [Rain Gear](gear#rain-gear): [Clever Hoods](https://cleverhood.com/) are popular + good
  * [Winter Cycling](gear#winter-cycling-gear): easier+better than you think, $200 of gear solves cold down to ≈25ºF
    * [Heated Gloves](gear#heated-gloves): [my main pair](https://www.amazon.com/gp/product/B07YBW4LCL/), [another good pair](https://www.amazon.com/gp/product/B07YYNJ4JQ/), and [one that actually makes a women's size](https://voltheat.com/collections/heated-gloves/products/all-purpose-womens-7v-heated-gloves)
    * [Heated Vests](gear#heated-vests)
    * [Pogies](gear#pogies)
    * [Heated Socks](gear#heated-socks)
    * [Hand Warmers](gear#hand-warmers)
  * [Action Cameras](gear#action-cameras): I use a [GoPro Hero 9 Black](https://gopro.com/en/us/shop/cameras/hero9-black/CHDHX-901-master.html) and [GoPro Hero 8 Black](https://gopro.com/en/us/shop/cameras/hero8-black/CHDHX-801-master.html), in [a chest harness and seat-rail mount](gear#camera-mounting), to [film rides](https://twitter.com/RunsAsCoded/status/1369745569120464903)
  * [Padded Shorts](gear#padded-shorts): [good all-around active shorts w/ pockets](https://www.amazon.com/gp/product/B07WSBTQH7/)
* [Documenting Rides](documenting-rides)
  * [Ride-tracking apps](documenting-rides#ride-tracking-apps):
    * [Strava](documenting-rides#strava): robust recording app \\(resumes after phone crashes\\), good small-circle social network, good open data posture
    * [RideWithGPS](documenting-rides#ridewithgps): similar to Strava, emphasis on route planning/sharing, UX is clunkier
    * [wandrer.earth](documenting-rides#wandrer.earth): cool app on top of Strava, providing stats/viz about places you've been and places you might still like to explore
  * [Post-Processing Videos](documenting-rides#post-processing-videos): dealing with videos afterward is its own adventure
    * [GoPros](documenting-rides#gopros) are pretty hard to deal with; telemetry data is often not recorded correctly, and the GoPro software ecosystem is a mess
    * [External SSDs](documenting-rides#ssds): [1TB](https://www.amazon.com/gp/product/B073H552FJ/)/[2TB](https://www.amazon.com/gp/product/B0874XWW23/) Samsungs, palm-sized
    * [512GB micro-SD](documenting-rides#micro-sd): never worry about SD-card capacity in-camera \\(there's enough to worry about when the data comes off the camera\\)
    * [Wasabi Cloud Storage](documenting-rides#wasabi): cheap+easy cloud storage; good option for archival video storage
    * [VFX Suites](documenting-rides#vfx): unfortunately necessary to do anything with action-camera videos
    * [YouTube](documenting-rides#youtube): I've posted some ride videos to [Neighbor Ryan on YouTube](https://www.youtube.com/channel/UCUEDi4kDGExvmx0g0gkVwkA/videos)

`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ebikes are a Transportation Revolution</title>
        <meta name="description" content="Ebikes are a Transportation Revolution" />
      </Head>
      <main className={styles.main}>
          {Markdown(md)}
      </main>
    </div>
  )
}
