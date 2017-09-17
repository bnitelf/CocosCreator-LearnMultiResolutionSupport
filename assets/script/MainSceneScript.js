cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    getScreenResolution: function () {
        var winSize = cc.director.getWinSizeInPixels();
        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();

        cc.log("win size (width, height) = " + winSize.width + ", " + winSize.height);
        cc.log("visible size (width, height) = " + visibleSize.width + ", " + visibleSize.height);
        cc.log("visible origin (x,y) = " + visibleOrigin.x + ", " + visibleOrigin.y);

        var node_lblResult1 = this.node.getChildByName("lblResult1");
        var node_lblResult2 = this.node.getChildByName("lblResult2");

        var lblResult1 = node_lblResult1.getComponent(cc.Label);
        var lblResult2 = node_lblResult2.getComponent(cc.Label);

        lblResult1.string = "winSize = " + winSize.width + ", " + winSize.height;
        lblResult2.string = "visible size = " + visibleSize.width + ", " + visibleSize.height;
    }
});
