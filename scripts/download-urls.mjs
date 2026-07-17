// Real download/referral URLs supplied by the site owner, keyed by game slug.
// Two lines from the source list were not usable and are intentionally
// omitted here:
//   - "Jaiho777vip" (jaiho777vip.site) duplicated Jaiho 777's own code
//     (RZPNPWJBVJQ) under a different mirror domain — jaiho-777 below keeps
//     the first-supplied URL (jaiho77790.com); the mirror was dropped rather
//     than guessed at.
//   - Any game with no supplied URL at all was removed from the directory
//     entirely (see GAME_ICON_MAP in copy-assets.mjs): Ind Bingo, Spin Crush,
//     Spin Lucky. (101Z was removed for the same reason, then restored once
//     its URL was supplied.)
// Two URLs had stray trailing text from the paste, cleaned up here:
//   - 777 Game: trailing "www.777game7.com" text dropped.
//   - Love Rummy: trailing URL-encoded emoji ("%F0%9F%94%97") dropped.
export const DOWNLOAD_URL_MAP = {
  "101z": "https://101zvip2.com/?code=398LS183AB2&t=1782032243",
  "567-slots": "https://join567slots.com/?code=9UX4YQ28P28&t=1782032755",
  "777-game": "https://www.777game0.com/?code=H53SKREANMZ&t=1782649361",
  "789-jackpot": "https://join789jackpots1.com/?code=VJJGANTLPWB&t=1782033375",
  "abc-rummy": "https://www.11abcrummy.com/?code=6X44DU7CVLN&t=1782033658",
  "bet-213": "https://www.bet213.cc/?code=2QT8E6SY5R3&t=1782033957",
  "bingo-101": "https://bingo101.buzz/?code=3WFSBEZLPYL&t=1782037952",
  "boss-rummy": "https://www.bossrummyr.com/?code=9HFJ28QUSPR&t=1782038197",
  "club-inr": "https://clubinrvip1.one/?code=WZJMGMZ4U1K&t=1782038302",
  "game-rummy": "https://gamesrummy.club/?code=GAFDVUWWYBV&t=1782039543",
  "gogo-rummy": "https://www.gospin.bet/?code=V4U6SUHF9FZ&t=1782040515",
  "hi-rummy": "https://joinhirummy.top/?code=RX33WPMEYAX&t=1782361457",
  "hindi-777": "https://www.hindi777agent5.com/?code=7LF62XGS8GT&t=1782361149",
  "ind-club": "https://indclub40.com/?code=W23E2SHD7PY&t=1782361758",
  "ind-rummy": "https://indrummyvip30.com/?code=R9ADC3HL1U6&t=1782361952",
  "ind-slots": "https://www.indslotsreferral.com/?code=T2QSBUR7LT4&t=1782362370",
  "inr-rummy": "https://inrrummy.club/?code=JMQ6RYF5BT6&t=1782361577",
  "jaiho-777": "https://jaiho77790.com/?code=RZPNPWJBVJQ&t=1782362904",
  "jaiho-91": "https://91jaihoapp.com/?code=C4238P5H5G8&t=1782362450",
  "jaiho-arcade": "https://www.jaihoarcade39.com/?code=74S26KHLRJD&t=1782363337",
  "jaiho-rummy": "https://jaihorummy.vip/?code=3NPSEJRCPZW&t=1782363623",
  "jaiho-slot": "https://www.jaihoslots23.com/?code=QJSJQQDZDDM&t=1782363832",
  "jaiho-spin": "https://18jaihospingames.com/?code=416GL765W3A&t=1782364119",
  "jaiho-win": "https://www.jaihowin11.com/?code=XZDTYJ1RY1Z&t=1782364383",
  "joy-rummy": "https://www.joyrummyon.com/?code=J5KYGYLKSDD&t=1782365855",
  "love-rummy": "https://www.loverummy7.com/?code=R6KUXVMQEB1&t=1782366602",
  "max-rummy": "https://www.maxrummy11.com/?code=QUMG2BV9MQB&t=1783568316",
  "maha-games": "https://yono-mahagames.com/?code=J245RQFLS2L&t=1782367067",
  "mbm-bet": "https://www.mbmbet14.com/?code=UPHMK55JNJ6&t=1782367306",
  "neta-vip": "https://www.neta1.vip/?code=DR0D36UVVZX&t=1782371532",
  "ok-rummy": "https://www.okrummy42.com/?code=H2G24LRWC8L&t=1782450801",
  "rumble-rummy": "https://www.rumblerummy888.net/?code=82M21AWEVEV&t=1782451748",
  "rummy-91": "https://rummy91g.com/?code=UXT3ZZWQHX8&t=1782456098",
  "rummy-ludo": "https://ludorummy.win/?code=UWPKN64A3KD&t=1782648889",
  "rummy-77": "https://rummy77r.net/?code=F3VZY2CL5KV&t=1782648996",
  "rummy-888": "https://rummy888vip31.com/?code=TPUK4VF51V9&t=1782456619",
  "saga-slots": "https://www.sagaslots77.com/?code=0QH9UVHARQU&t=1782458248",
  "share-slots": "https://share0022.com/?code=YAZRMEX5W98&t=1782459612",
  "slot-spin": "https://www.slotsspinj.com/?code=C1A5F6PQW4M&t=1782470064",
  "slots-winner": "https://slotswinneragents.com/?code=PGVWTWRNB6F&t=1782470385",
  "spin-gold": "https://spingoldvipagent.net/?code=S9VFE5T8JDS&t=1782473990",
  "spin-winner": "https://spinwinner-y.com/?code=QVT2P3HKTUZ&t=1782474125",
  "spin-101": "https://spin101-e.org/?code=Z9BR1AXYMH3&t=1782473000",
  "spin-777": "https://spin777-t.com/?code=YLWAEF9UZ9W&t=1782473441",
  "top-rummy": "https://www.toprummy.cc/?code=M4G2WX7PAUF&t=1782475234",
  "yes-spin": "https://www.yesspinmotion.com/?code=47TMD53C9SA&t=1782475635",
  "yn-777": "https://www.y754.com/?code=4SWBALCES8G&t=1782476034",
  "yono-arcade": "https://yonoofficial2.com/?code=96LUT957MWS&t=1782476174",
  "yono-games": "https://youonogamesgift.com/?code=GK1EVT15SS7&t=1782476329",
  "yono-rummy": "https://yonorummy042.com/?code=VIP3Z76MJCF&t=1782478473",
  "yono-slots": "https://www.uonoslot.icu/?code=59YBLQ1756L&t=1782478570",
  "yono-vip": "https://yonovipindia.vip/?code=9U8WLAJJSM5&t=1782481304",
  "yono-777": "https://yonomain777.one/?code=ZMRZ6SUQQZ2&t=1782213370",
};
