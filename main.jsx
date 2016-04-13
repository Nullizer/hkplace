var App = React.createClass({
  getInitialState: function () {
    return {
      selected: this.props.data[0]
    }
  },
  componentDidMount: function () {
    var firstPlace = this.state.selected.places[0]
    this.getPos(firstPlace.pos, firstPlace.name)
  },
  getPos: function (pos, name) {
    this.map = this.map || L.map('map')
    if (this.mapMarker) {
      this.map.removeLayer(this.mapMarker)
    }
    this.map.setView(pos, 13)
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'nullizer.plaome88',
      accessToken: 'pk.eyJ1IjoibnVsbGl6ZXIiLCJhIjoiY2ltdng5amNtMDMyaHZobTR5MXl3NXB1YyJ9.DMy8LoXL_V1Vuf_AO9ZNHQ'
    }).addTo(this.map)
    this.mapMarker = L.marker(pos).addTo(this.map)
    this.mapMarker.bindPopup(name).openPopup()
  },
  toggleShow: function (i) {
    this.setState({ selected: this.props.data[i]})
    this.refs.placeDesc.scrollTop = 0
  },
  render: function() {
    return (
      <div className="app pure-g">
        <nav className="nav pure-u-2-5 pure-u-md-1-5">
          <ul>
            {this.props.data.map(function (cateData, index) {
            return <li key={index}><button className="pure-button" onClick={this.toggleShow.bind(this, index)}>{cateData.title}</button></li>
            }, this)}
          </ul>
        </nav>
        <article ref="placeDesc" className="place-desc pure-u-3-5 pure-u-md-2-5">
        {this.state.selected.places.map(function (place, index) {
        return (
          <section className="place-section" key={index} onClick={this.getPos.bind(this, place.pos, place.name)}>
            <header>
              <img className="sign" alt={place.name} src={place.sign} />
            </header>
            <p className="desc">{place.desc}</p>
            <img className="photo" alt="photo" src={place.photo} />
          </section>
        )
        }, this)}
        </article>
        <div className="map pure-u-md-2-5">
          <div id="map"></div>
        </div>
      </div>
    )
  }
})
var data = [
  {
    title: '啼笑皆非的翻譯',
    places: [
      {
        name: '列拿士地台 Rednaxela Terrace',
        desc: '列拿士地台最初是紀念一名叫Alexander的人，' +
              '由於當時的中國師傅文化水平較低， 並習慣了從右向左的書寫，' +
              '最後將整個英文字左右顛倒了變作Rednaxela Terrace， 而之後的中文又是因此而譯。 ' +
              '現在的列拿士地台是個行人專用通道， 也常會有游客特意前來拍攝此道路名。',
        photo: 'img/Rednaxela_Terrace.jpg',
        sign: 'img/signs/Rednaxela_Terrace.png',
        pos: [22.280938, 114.151467],
      },
      {
        name: '磅巷 Pound Lane',
        desc: '磅巷是位於香港島上環的一條古老行人樓梯街。' +
        ' 然而磅巷的 “pound”有很多意思， 不是指重量單位 “磅”， 而是當時英國人設立的一個飼養牲畜的圍圈。' +
        '因為早年翻譯人的水平有限， 又根據音譯而非理解， 出現了”磅巷” 和很多讓人啼笑的街名。',
        photo: 'img/Pound_Lane.JPG',
        sign: 'img/signs/Pound_Lane.png',
        pos: [22.284829, 114.147654],
      }
    ]
  },
  {
    title: 'IT 人士最愛的路名',
    places: [
      {
        name: '渣华道 Java Road',
        desc: '渣華道位於香港東區， 你或許以為這是一條因程序語言得名的道路。' +
              '然而并不是。它初期被稱為 “爪哇道”， 因為1900年間有一間 “爪哇輪船公司”而得名。 後來改名為較為文雅的渣華道。',
        photo: 'img/Java_Road.jpg',
        sign: 'img/signs/Java_Road.png',
        pos: [22.291925, 114.198215],
      },
      {
        name: '開源道 Hoi Yuen Road',
        desc: '看英文路名就知道，此處的開源不是 open source。開源道是香港九龍東觀塘區觀塘商貿區內的一條三線單向行車道路。',
        photo: 'img/Hoi_Yuen_Road.JPG',
        sign: 'img/signs/Hoi_Yuen_Road.png',
        pos: [22.310481, 114.224630],
      },
      {
        name: '蜆殼街 Shell street',
        desc: '這條街的名字， 有說法是來源於荷蘭皇家殼牌公司(Royal Dutch Shell plc)，' +
              '世界第二大石油公司。50年代，香港的石油用量在十年間增加了三倍，蜆殼是主要的油品供應商。' +
              '位於大角咀和北角有兩所舊油庫, 但於1980年及1981年停用。然而每當提及或途經蜆殼街和油街，仍會讓人想起兩所油庫昔日的光輝歲月。',
        photo: 'img/shell_street.jpg',
        sign: 'img/signs/shell_street.png',
        pos: [22.286886, 114.192234],
      }
    ]
  },
  {
    title: '中英文名不同寓意',
    places: [
      {
        name: '香港仔大道 Aberdeen Main Road',
        desc: '在中環的鴨巴甸街是以當時的英國外交大臣鴨巴甸勛爵(Earl of Aberdeen)命名。 鴨巴甸街是一個音譯。' +
              '鴨巴甸村莊在1841年英國人到來前就已經存在，並稱其村莊為香港。 當英國人占領了整個島時也保留了這個稱號香港。' +
              '所以鴨巴甸村莊的人們開始叫他們自己香港仔。 村中裡的街道像香港仔大道，香港仔海旁道都以香港仔開頭。',
        photo: 'img/Aberdeen_Main_Road.jpg',
        sign: 'img/signs/Aberdeen_Main_Road.png',
        pos: [22.249009, 114.155687],
      },
      {
        name: '銅鑼灣 Causeway Bay',
        desc: '19世紀末， 因為來往香港島東西需要繞路或坐船經過銅鑼灣極為不方便， 所以興建了一條連接海灣的海堤， 所以銅鑼灣的英文名是 Causeway Bay。' +
              '因為這個堤壩的形狀像一個破銅鑼， 所以人們稱他為 “銅鑼灣”。',
        photo: 'img/causeway_bay.JPG',
        sign: 'img/signs/causeway_bay.png',
        pos: [22.278576, 114.182538],
      }
    ]
  },
  {
    title: '和地名玩文字遊戲',
    places: [
      {
        name: '蘭桂坊 Lan Kwai Fong',
        desc: '蘭桂坊這個街名的來源有好幾個不同的說法，早些年間，這個地方是駐守在香港的英國士兵的紅燈區。' +
              '當地人民叫這個地方爛鬼坊，之後演變成蘭桂坊。也有人說，在十九世紀，這個地區被一個姓陳的人開發，他以蘭軒和桂漢這兩個名字被人熟知。' +
              '所以他命名這個地方蘭桂坊。還有一種說法，在這個街區，有好多賣蘭花和桂花的商鋪和小販。所以這個街區被命名為蘭桂坊。',
        photo: 'img/LKF.jpg',
        sign: 'img/signs/LKF.png',
        pos: [22.280900, 114.155668],
      },
      {
        name: '調景嶺 Tiu Keng Leung',
        desc: '1905年，一個名叫倫尼（Alfred Herbert Rennie）的加拿大人在該處興建面粉廠。' +
              '面粉廠於1908年4月倒閉，倫尼自盡。有傳聞指他在面粉廠上吊自盡而死，因此亦產生了“吊頸嶺”這個戲稱。' +
              '到了1950年代難民遷至該處後，香港政府由“吊頸嶺”的改稱為“調景嶺”，有“調整景況”之意。',
        photo: 'img/Tiu_Keng_Leng.jpg',
        sign: 'img/signs/Tiu_Keng_Leng.png',
        pos: [22.304294, 114.252814],
      },
      {
        name: '將軍澳 Junk Bay/Tseung Kwan O',
        desc: '打開 Google Maps， 你會發現，將軍澳附近的海域寫著 Junk Bay 字樣。' +
              '1980年代，將軍澳成為垃圾堆填區，Junk Bay 或許因此得名。日後被人們修改為發音近似的「將軍」。' +
              '不過，「將軍澳」的由來也有許多別的版本。很多人認為是因為清朝時此海灣常有走私船出沒，朝廷便派一名將軍鎮守此地打擊走私活動，故名“將軍澳”。' +
              '還有個說法， 在明朝時候某位將軍敗走到今將軍澳現址，最後傷重死去。後人為紀念這位將軍，除在原地安葬該將軍外，還把安葬地稱作“將軍澳”以作紀念。',
        photo: 'img/Tseung_Kwan_O.jpg',
        sign: 'img/signs/Tseung_Kwan_O.png',
        pos: [22.307756, 114.260925],
      }
    ]
  },
  {
    title: '以路名寄託鄉思',
    places: [
      {
        name: '士美菲路 Smithfield',
        desc: '士美菲路(Smithfield)是香港少數以一個英文單字作為路名的道路。' +
              ' “路”作為音譯的一部分， 士美菲路(Smithfield)和己連拿利(Glenealy)是香港唯一沒有中英文後綴的道路。' +
              'Smithfield指的是英國倫敦市西北部的Smithfield， 是市內的街市和鮮肉批發中心， 牲畜暫放區。' +
              '而香港的士美菲路過去也有牛房，臨時市場。 這條士美菲路就像英國人表達鄉思一樣， 把鄉愁都給予在了這條街。',
        photo: 'img/Smithfield.jpg',
        sign: 'img/signs/Smithfield.png',
        pos: [22.280550, 114.129139],
      }
    ]
  },
]
ReactDOM.render(
  <App data={data}/>,
  document.getElementById('app')
)