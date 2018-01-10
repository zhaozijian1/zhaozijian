<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height='64' :src="mes.avatar" alt="banner" />
			</div>
			<div class="content">
				<div class="title">
	          		<span class="brand"></span>
	          		<span class="name">{{mes.name}}</span>
				</div>
				<div class="description">{{mes.description}}/{{mes.deliveryTime}}分钟送到</div>
				<div v-if="mes.supports" class="support">
					<span class="icon" :class="classMap[mes.supports[0].type]"></span>
					<span class="text">{{mes.supports[0].description}}</span>
				</div>
  	 </div>
        	<div v-if="mes.supports" class="supports-count" @click="showDetail">
        		<span class="count">{{mes.supports.length}}个</span>
        		<i class="icon-keyboard_arrow_right"></i>
        	</div>
        	<div class="bulletin-wrapper">
        		<span class="bulletin-title"></span>
						<span class="bulletin-text" style="font-size:12px">{{mes.bulletin}}</span>
      			<i class="icon-keyboard_arrow_right"></i>
        	</div>
        	<div class="background">
        		<img :src="mes.avatar" width="100%" height="100%" alt="" />
        	</div>
        	<div v-show="detailShow" class="detail">
        		<div class="dedail-wrapper clearfix">
        			<div class="detail-main">
        				<h1 class="name">{{mes.name}}</h1>
        				<div class="star-wrapper">
        					<star :size="48" :score="5"></star>
        				</div>
        			</div>
        		</div>
        	</div>
		</div>
		
	</div>
</template>
<script  type="text/ecmascript-6">
import {getseller} from 'api/app';
import star from 'components/star/star'

const ERR_OK = true;

export default {
	data() {
      return {
      	detailShow: false,
		data: [],
		mes: []		
	  };
	},
	methods: {
		showDetail() {
			this.detailShow = true;
		},
		hideDetail() {
			this.detailShow = false;
		}
	},
	created() {
		getseller().then((res) => {
		  let data = res.data;
		  this.mes = res.data;
		  console.log(this.mes);
		});
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
	},
	components: {
		star
	}
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
	.header
	 position:relative
	 overflow:hidden
	 color:#ffffff
	 background: rgba(7, 17, 27, 0.5)
	 .content-wrapper
	   padding: 25px 12px 44px 2px
	   font-size: 0
	   position: relative
	   .avatar
	    display:inline-block
	    vertical-align: top
	    padding-left: 24px
	    img
	     border-radius: 3px
	   .content
	   	display: inline-block
	   	margin-left: 14px
	   	font-size: 14px
	   	.title
	   	 margin: 2px 0 8px 0px
	   	 .brand
	   	  display: inline-block
	   	  vertical-align: top
	   	  width: 30px
	   	  height: 18px
	   	  bg-image('brand')
	   	  background-size: 30px 18px
	   	  background-repeat: no-repeat
	   	 .name
	   	  margin-left: 6px
	   	  font-size: 16px
	   	  line-height: 18px
	   	  font-weight: bold
	   	.description
	   	 margin-bottom: 10px
	   	 line-height: 12px
	   	 font-size: 16px
	   	.support
	   	  .icon
	   	  	display: inline-block
	   	  	vertical-align: top
	   	  	width: 12px
	   	  	height: 12px
	   	  	margin-right: 4px
	   	  	background-size: 12px 12px
	   	  	background-repeat: no-repeat
	   	  	&.decrease
	   	  	  bg-image('decrease_1')
	   	  	&.discount
	   	  	  bg-image('discount_1')
	   	  	&.guarantee
	   	  	  bg-image('guarantee_1')
	   	  	&.invoice
	   	  	  bg-image('invoice_1')
	   	  	&.special
	   	  	  bg-image('special_1')
	   	  .text
	   	  	line-height: 12px
	   	  	font-size: 12px
	   	  	vertical-align: top
	   .supports-count
	     position: absolute
	     right: 12px
	     bottom: 43px
	     padding: 0 10px
	     height: 24px
	     line-height: 24px
	     border-radius: 14px
	     background: rgba(0, 0, 0, 0.2)
	     text-align:center
	     .count
	       vertical-align: top
	       font-size: 10px
	     .icon-keyboard_arrow_right
	       margin-left: 12px
	       line-height: 24px
	       font-size: 12px
	   .bulletin-wrapper
	   	 position: absolute
	   	 bottom: 0px
	   	 padding-top: 24px 
	   	 height: 28px
	   	 line-height: 28px
	   	 padding: 0 22px 0 12px
	   	 overflow: hidden
	   	 background: rgba(7, 17, 27, 0.2)
	   	 text-align:center
	   	 .bulletin-title
	   	   display: inline-block
	   	   vertical-align: top
	   	   width: 24px
	   	   height: 12px
	   	   margin-top: 8px
	   	   bg-image('bulletin')
	   	   background-size: 22px 12px
	   	 .bulletin-text
	   	   vertical-align: top
	   	   margin: 0 4px
	   	   font-size: 10px
	   	 .icon-keyboard_arrow_right
	   	   position: absolute
	   	   font-size: 10px
	   	   right: 12px
	   	   top: 8px
	   .background
	   	position: absolute
	   	top: 0
	   	left: 0
	   	width: 100%
	   	height: 100%
	   	z-index: -1
	   	filter:blur(10px)
	   .detail
	   	 position: fixed
	   	 z-index: 100
	   	 top: 0
	   	 left: 0
	   	 width: 100%
	   	 height: 100%
	   	 overflow: auto
	   	 transition: all 0.5s
	   	 background-color: rgba(10, 20, 10, 0.3)
	   	 backrop-filter: blur(10px)
	   	 &.fade-transition
	   	   opacity: 1
	   	   background: rgba(7, 17, 27, 0.8)
	   	 &.fade-enter, &.fade-leave-to
	   	   opacity: 0
	   	   background: rgba(7, 17, 27, 0)
	   	 .detail-wrapper
	   	   width: 100%
	   	   min-height: 100%
	   	  .detail-main
	   	   	margin-top: 64px
	   	   	padding-bottom: 64px
	   	   .name
	   	   	 line-height: 16px
	   	   	 text-align: center
	   	   	 font-size: 16px
	   	   	 font-weight: 700
	   	   .star-wrapper
	   	     margin-top: 18px
	   	     padding: 2px 0
	   	     text-align: center
	   	   .title
	   	     display: flex
	   	     width: 80%
	   	     margin: 28px auto 24px auto
	   	     .line
	   	       flex: 1
	   	       position: relative
	   	       top: -6px
	   	       border-bottom: 1px solid rhba(255, 255, 255, 0.2)
	   	     .text
	   	       padding: 0 12px
	   	       font-size: 14px
	   	       font-weight: 700
	   	   .supports
	   	     width: 80%
	   	     margin: 0 auto
	   	     .support-item
	   	       padding: 0 12px
	   	       margin-bottom: 12px
	   	       font-size: 0
	   	       &:last-child
	   	          margin-bottom: 0
	   	        .icon
	   	          display: inline-block
	   	          width: 16px
	   	          height: 16px
	   	          vertical-align: top
	   	          margin-right: 6px
	   	          background-size: 16px 16px
	   	          background-repeat: no-repeat
	   	          &.decrease
	   	            bg-image('decrease_2')
	   	          &.discount
	   	            bg-image('discount_2')
	   	          &.guarantee
	   	            bg-image('guarantee_2')
	   	          &.invoice
	   	            bg-image('invoice_2')
	   	          &.special
	   	            bg-image('special_2')
	   	        .text
	   	         line-height: 16px
	   	         font-size: 12px
	   	   .bulletin
	   	     width: 80%
	   	     margin: 0 auto
	   	     .content
	   	       padding: 0 12px
	   	       line-height: 24px
	   	       font-size: 12px
	   	       text-align: justify
	   	 .detail-close
	   	   position: relative
	   	   width: 32px
	   	   height: 32px
	   	   margin: -64px auto 0 auto
	   	   clear: both
	   	   font-size: 32px
	   	   .icon-close
	   	     width: 24px
	   	     height: 24px
	   	     display:inline-block
	   	     line-height: 16px
	   	     background: rgba(10, 20, 10, 0.5)
</style>