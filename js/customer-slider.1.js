/* 蜘蛛引擎客户案例广告展示脚本 */
$(function(){
    var _customer_slider_index = 0;
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
    
    init();
    
    $('.customer-slider__content-thumb img').on('click',function(){

        index = $(this).data('index');

        setCustomerSlider(index);

        setActive(index);

        setContent(index);
    });

    function setContent(index){
        $('#customer-slider-content .customer-slider__content-text p:eq(0)').text(_customer_slider_data[index].title);
        $('#customer-slider-content .customer-slider__content-text p:eq(1)').text(_customer_slider_data[index].content)
    }

    function setThumbImage(){
        let data_len = _customer_slider_data.length;
        let thumb_htm= '';
        for(var i=0;i<data_len;++i){
            thumb_htm += "<img src="+_customer_slider_data[i].image+" data-index="+i+" alt=''>"
        }
        $('#customer-slider-content .customer-slider__content-thumb').html(thumb_htm)
    }

    function setActive(index){
        //rgb(204,204, 204)
        $('#customer-slider-content .customer-slider__content-thumb').children().attr('style','border-color:rgb(204,204, 204)')
        $('#customer-slider-content .customer-slider__content-thumb').children().eq(index).attr('style','border-color:rgb(2, 214, 220)')
    }

    function setCustomerSlider(index){
        $('#customer-slider-content .customer-slider__content-image img').attr('src',_customer_slider_data[index].image)
    }

    function init(){

        setThumbImage();

        setCustomerSlider(_customer_slider_index);

        setActive(_customer_slider_index);

        setContent(_customer_slider_index);
    }
})