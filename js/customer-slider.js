/* 蜘蛛引擎客户案例广告展示脚本 */
function SliderCustomer(){
    this.data = null;
    this.config = {
        auto  : false,
        auto_time : 1000,  
        index : 0,
        ele_content  : "#customer-slider-content",
        ele_thumb    : ".customer-slider__content-thumb",
        ele_image    : ".customer-slider__content-image",
        ele_text     : ".customer-slider__content-text",
        active_color : "rgb(204,204, 204)",
        default_color: "rgb(2, 214, 220)"
    }

    return this;
}
SliderCustomer.prototype = {
    constuctor : SliderCustomer,
    setThumbImage : function(){
        let data_length = this.data.length;
        let thumb_htm= '';
        for(var i=0;i<data_length;++i){
            thumb_htm += "<img src="+this.data[i].image+" data-index="+i+" alt=''>"
        }
        $(this.config.ele_content+' '+this.config.ele_thumb).html(thumb_htm)
    },
    setCustomerSlider : function(){
        $(this.config.ele_content+' '+this.config.ele_image+' img').attr('src',this.data[this.config.index].image)
    },
    setActive : function(){
        $(this.config.ele_content+' '+this.config.ele_thumb).children().attr('style','border-color:'+this.config.active_color);
        $(this.config.ele_content+' '+this.config.ele_thumb).children().eq(this.config.index).attr('style','border-color:'+this.config.default_color);
    },
    setContent : function(){
        $(this.config.ele_content+' '+this.config.ele_text+' p:eq(0)').text(this.data[this.config.index].title);
        $(this.config.ele_content+' '+this.config.ele_text+' p:eq(1)').text(this.data[this.config.index].content);
    },
    start : function(){
        let that = this;
        that._init_();
        let data_length = this.data.length;
        if(that.config.auto){
            setInterval(function(){
                if(data_length-1 <= that.config.index){
                    that.config.index = 0;
                }else{
                    that.config.index++;
                }
                console.log(that.config.index)
                that._init_()
            },that.config.auto_time)
        }

        $(that.config.ele_content+' '+that.config.ele_thumb+' img').on('click',function(i){
            that.config.index = $(this).data('index');
            that.setCustomerSlider();
            that.setActive();
            that.setContent();
        });
    },
    _init_ : function(){
        this.setThumbImage();
        this.setCustomerSlider();
        this.setActive();
        this.setContent();
    }

}

$(function(){
    var _customer_slider_data  =  [
        {
            id : 1,
            image : './images/1.jpg',
            title : '乘用车轻量化数据信息平台',
            content : '【乘用车轻量化数据信息平台】结合专业图形引擎SpiderBIM，实现传统汽车3D模型在线浏览，快速选取、查看、编辑和输出指定构件的专业数据、评测报告、专利标准等信息。'
        },
        {
            id : 2,
            image : './images/2.jpg',
            title : '市住房与城乡建设委员会BIM管理平台',
            content : '结合专业可视化图形引擎-蜘蛛引擎，实现设计BIM管理，BIM模型审查，工程质量验收管理，BIM施工应用管理，BIM数据管理等多场景应用。'
        },
        {
            id : 3,
            image : './images/3.jpg',
            title : '成都铁路局客站建设指挥部BIM云',
            content : '在多个高铁站房建设中得到应用，如重庆西站，贵安站等。平台特性：轻量化图形引擎，支持定制化开发，支持多方实时交流，支持构件绑定施工模拟，支持构件二维码追踪，支持三维模型漫游，支持人员信息化管理等'
        }
    ];
    var obj = new SliderCustomer();
    obj.data = _customer_slider_data;
    obj.config.auto = true
    obj.config.auto_time = 2000
    obj.start()
})