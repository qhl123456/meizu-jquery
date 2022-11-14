$(function(){const t={"北京市":{"市辖区":["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云区","延庆区"]},"河北省":{"石家庄市":["长安区","桥西区","新华区","井陉矿区","裕华区","藁城区","鹿泉区","栾城区","井陉县","正定县","行唐县","灵寿县","高邑县","深泽县","赞皇县","无极县","平山县","元氏县","赵县","石家庄高新技术产业开发区","石家庄循环化工园区","辛集市","晋州市","新乐市"],"唐山市":["路南区","路北区","古冶区","开平区","丰南区","丰润区","曹妃甸区","滦县","滦南县","乐亭县","迁西县","玉田县","唐山市芦台经济技术开发区","唐山市汉沽管理区","唐山高新技术产业开发区","河北唐山海港经济开发区","遵化市","迁安市"],"秦皇岛市":["海港区","山海关区","北戴河区","抚宁区","青龙满族自治县","昌黎县","卢龙县","秦皇岛市经济技术开发区","北戴河新区"],"邯郸市":["邯山区","丛台区","复兴区","峰峰矿区","肥乡区","永年区","临漳县","成安县","大名县","涉县","磁县","邱县","鸡泽县","广平县","馆陶县","魏县","曲周县","邯郸经济技术开发区","邯郸冀南新区","武安市"],"衡水市":["桃城区","冀州区","枣强县","武邑县","武强县","饶阳县","安平县","故城县","景县","阜城县","河北衡水经济开发区","衡水滨湖新区","深州市"]},"湖南省":{"长沙市":["芙蓉区","天心区","岳麓区","开福区","雨花区","望城区","长沙县","浏阳市","宁乡市"],"株洲市":["荷塘区","芦淞区","石峰区","天元区","株洲县","攸县","茶陵县","炎陵县","云龙示范区","醴陵市"],"湘潭市":["雨湖区","岳塘区","湘潭县","湖南湘潭高新技术产业园区","湘潭昭山示范区","湘潭九华示范区","湘乡市","韶山市"],"衡阳市":["珠晖区","雁峰区","石鼓区","蒸湘区","南岳区","衡阳县","衡南县","衡山县","衡东县","祁东县","衡阳综合保税区","湖南衡阳高新技术产业园区","湖南衡阳松木经济开发区","耒阳市","常宁市"]},"广东省":{"广州市":["荔湾区","越秀区","海珠区","天河区","白云区","黄埔区","番禺区","花都区","南沙区","从化区","增城区"],"韶关市":["武江区","浈江区","曲江区","始兴县","仁化县","翁源县","乳源瑶族自治县","新丰县","乐昌市","南雄市"],"深圳市":["罗湖区","福田区","南山区","宝安区","龙岗区","盐田区","龙华区","坪山区"],"珠海市":["香洲区","斗门区","金湾区"]}};new class{constructor(e,s,d,t,i,r,a,o,h,n,c,l,$,m,u){this.add=e,this.addAddress=s,this.mask=d,this.address=t,this.uesrname=i,this.userphone=r,this.detailAddress=a,this.confirm=o,this.cancel=h,this.noAdd=n,this.edit=c,this.remove=l,this.province=$,this.city=m,this.county=u,this.eventBind()}addClick(){this.add.click(()=>{this.mask.fadeIn(),this.addAddress.show()})}cancelClick(){this.cancel.click(()=>{this.mask.fadeOut(),this.addAddress.hide(),this.closeAddress()})}noAddClick(){this.noAdd.click(()=>{this.mask.fadeOut(),this.addAddress.hide(),this.closeAddress()})}successAddclick(){this.confirm.click(()=>{this.mask.fadeOut(),this.addAddress.hide(),this.showAddress(),this.address.fadeIn(),this.address.addClass("checked"),this.closeAddress()})}showAddress(){var e=this.uesrname.val(),s=this.userphone.val(),d=this.detailAddress.val();$(".order-address-checkbox-name").html(e),$(".order-address-checkbox-phone").html(s),$(".order-address-checkbox-content").html($("#province").val()+$("#city").val()+$("#county").val()+d)}closeAddress(){this.uesrname.val(""),this.userphone.val(""),sessionStorage.setItem("province",$("#province").val()),sessionStorage.setItem("city",$("#city").val()),sessionStorage.setItem("county",$("#county").val()),sessionStorage.setItem("detailAddress",this.detailAddress.val()),this.detailAddress.val(""),$("#province").val(""),$("#city").val(""),$("#county").val("")}editAddress(){this.edit.click(()=>{this.mask.fadeIn(),this.addAddress.show(),this.uesrname.val($(".order-address-checkbox-name").html()),this.userphone.val($(".order-address-checkbox-phone").html()),$("#province").val(sessionStorage.getItem("province")),$("#city").val(sessionStorage.getItem("city")),$("#county").val(sessionStorage.getItem("county")),this.detailAddress.val(sessionStorage.getItem("detailAddress"))})}removeAddress(){this.remove.click(()=>{this.address.fadeOut(),$(".order-address-checkbox-name").html(" "),$(".order-address-checkbox-phone").html(" "),$(".order-address-checkbox-content").html(" "),sessionStorage.removeItem("province"),sessionStorage.removeItem("city"),sessionStorage.removeItem("county"),sessionStorage.removeItem("detailAddress")})}hoverEdit(){this.address.mouseenter(()=>{$(".order-edit-address").fadeIn()}),this.address.mouseleave(()=>{$(".order-edit-address").fadeOut()}),$(".order-edit-address").mouseleave(()=>{$(".order-edit-address").fadeOut()})}selectAddress(){for(var s in t){let e=$("<option></option>").appendTo($("#province"));e.val(s),e.html(s)}$("#province").change(()=>{$("#city").html(`
        <option>--请选择城市--</option>
        `);var e=$("#province").val();if($("#city").html('<option value="">--城市--</option>'),$("#county").html('<option value="">--区/县--</option>'),""!==e)for(var s in t[e]){let e=$("<option></option>").appendTo($("#city"));e.val(s),e.html(s)}}),$("#city").change(()=>{$("#county").html(`
        <option>--请选择地区--</option>
        `);var e=$("#province").val(),s=$("#city").val(),d=t[e][s];if($("#county").html('<option value="">--区/县--</option>'),""!==s)for(let s=0;s<d.length;s++){let e=$("<option></option>").appendTo($("#county"));e.val(d[s]),e.html(d[s])}})}eventBind(){this.addClick(),this.cancelClick(),this.noAddClick(),this.successAddclick(),this.hoverEdit(),this.editAddress(),this.removeAddress(),this.selectAddress()}}($(".add"),$(".address-adder"),$(".adder-mask"),$(".order-address-checkbox").eq(0),$(".address-adder-name"),$(".address-adder-phone"),$(".address-adder-detail"),$(".address-btn-success"),$(".address-btn-cancel"),$(".address-adder-cancel"),$(".edit"),$(".remove")),$(window).scroll(function(){$(document).scrollTop()>$(".add em").offset().top?$(".aside").fadeIn():$(".aside").fadeOut()}),$(".backTop").click(()=>{$("body,html").animate({scrollTop:0},600)}),$(".order-total-btn").click(()=>{$(".order-address-list li").eq(0).is(":hidden")?($(".adder-mask").fadeIn(),$(".alert").show()):window.location.href="http://127.0.0.1/meizu/success.html"}),$(".title span").click(()=>{$(".adder-mask").fadeOut(),$(".alert").hide()}),$(".ok").click(()=>{$(".adder-mask").fadeOut(),$(".alert").hide()}),$(".address-adder-name").blur(function(){""==$(this).val()?($(this).addClass("must-require"),$(".require-name").show()):/^[\u4E00-\u9FA5]{2,4}$/.test($(this).val())?($(this).removeClass("must-require"),$(".require-name").hide()):($(this).addClass("must-require"),$(".require-name").show(),$(".require-name").html("请输入正确的姓名"))}),$(".address-adder-phone").blur(function(){""==$(this).val()?($(this).addClass("must-require"),$(".require-phone").show()):/^[1][3,4,5,7,8,9][0-9]{9}$/.test($(this).val())?($(this).removeClass("must-require"),$(".require-phone").hide()):($(this).addClass("must-require"),$(".require-phone").show(),$(".require-phone").html("请输入正确的手机号"))}),$(".address-adder-detail").blur(function(){""==$(this).val()?($(this).addClass("must-require"),$(".require-address").show()):/^[\u4E00-\u9FA5]{4,50}$/.test($(this).val())?($(this).removeClass("must-require"),$(".require-address").hide()):($(this).addClass("must-require"),$(".require-address").show(),$(".require-address").html("请输入正确的地址信息"))})});