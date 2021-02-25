const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,				//吸底模式			
    autoplay: false,            //自动播放
    lrcType: 3,   //歌词载入模式 1为直接在JS文件中写入，3为lrc文件使用但是我总是失败
    audio: [
      {
        name: "尘埃",
        artist: '王雨桐',
        url: 'http://music.163.com/song/media/outer/url?id=1426959223.mp3',
        cover: 'http://p2.music.126.net/mhYryNeUesMiAuudyVVCww==/109951165107691295.jpg?param=130y130',
      },
      {
        name: '年少有为',
        artist: '李荣浩',
        url: 'http://music.163.com/song/media/outer/url?id=1293886117.mp3',
        cover: 'http://p1.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg?param=130y130',
      },
      {
        name: 'Lemo',
        artist: '米津玄師',
        url: 'http://music.163.com/song/media/outer/url?id=536622304.mp3',
        cover: 'http://p1.music.126.net/6IeZ9MiSSDXifj74nzH6ww==/109951163561494000.jpg?param=130y130',
      },
      {
        name: 'そばにいるね',
        artist: '青山テルマ',
        url: 'http://music.163.com/song/media/outer/url?id=555142.mp3',
        cover: 'http://p1.music.126.net/NbCDQFwkLCYJbWMJdTfoMA==/109951165611108178.jpg?param=130y130',
      },
      {
        name: '夏天的风',
        artist: '火羊瞌睡了',
        url: 'http://music.163.com/song/media/outer/url?id=1436709403.mp3',
        cover: 'http://p1.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?param=130y130',
      },
       {
        name: '可乐',
        artist: '赵紫骅',
        url: 'http://music.163.com/song/media/outer/url?id=29759733.mp3',
        cover: 'https://p1.music.126.net/qOfVT6izV4mBe4IyQn489Q==/18190320370401891.jpg?param=130y130',
      },
       {
        name: '你要的全拿走',
        artist: '胡彦斌',
        url: 'http://music.163.com/song/media/outer/url?id=529668356.mp3',
        cover: 'https://p1.music.126.net/9uUWLnRsv4c0F0wu9dlttA==/109951163118372627.jpg?param=130y130',
      }
     
    ]
});
