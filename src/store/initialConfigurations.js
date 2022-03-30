const initialConfigurations = (payload) => {
  if(payload === "background") return {isSet: false, isLocalBg: true, source: "", filter: {brightness: 100, contrast: 100, saturate: 100}};

  if(payload === "components") {
      return [
        {name: "greeting", isVisible: true, addedStyles:{fontFamily: "'Lato', sans-serif", fontWeight: 100, color: "#EBEBEB", opacity: 1}},
        {name: "motivations", isVisible: true, addedStyles:{fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "#EBEBEB", opacity: .9}},
        {name: "bookmarks", isVisible: true, addedStyles:{fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 300, color: "#EBEBEB", opacity: 1}},
        {name: "search", isVisible: true, addedStyles:{fontFamily: "'Inter', sans serif", fontWeight: 200, color: "#EBEBEB", opacity: 1}},
        {name: "time", isVisible: true, addedStyles:{fontFamily: "'Inter', sans serif", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
        {name: "todos", isVisible: true, addedStyles:{fontFamily: "'Inter', sans serif", fontWeight: 400, color: "#EBEBEB", opacity: .8}},
        {name: "weather", isVisible: true, addedStyles:{fontFamily: "'Inter', sans serif", fontWeight: 400, color: "#EBEBEB", opacity: 1}},
        ];
  };

  if(payload === "ui"){
    return {containerColor: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))", primaryColor: "#45a198", settingsPosition: "top"}
  }
  if(payload === "bookmarksList"){
    return [
      {url: "https://www.facebook.com/" ,title: "Facebook", favicon: "https://static.xx.fbcdn.net/rsrc.php/yv/r/B8BxsscfVBr.ico", id: "01"},
      {url: "https://www.instagram.com/" ,title: "Instagram", favicon: "https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png", id: "02"},
      {url: "https://www.youtube.com/" ,title: "YouTube", favicon: "https://www.youtube.com/s/desktop/1b170d1d/img/favicon.ico", id: "03"},

    ]
  }
};

export default initialConfigurations;

/*
https://url-metadata.herokuapp.com/ 


*/