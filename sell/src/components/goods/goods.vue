<template>
	<div class="goods">
		<div class="menu-wrapper" v-el:menu-wrapper>
			<ul style="display: inline;">
				<li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex === $index}">
					<span class="text border-1px">
	            		<span v-show="item.type>0" class="icon"></span>{{index.name}}
	          		</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" v-el:foods-wrapper>
			<ul>
				<li v-for="(item,index) in goods" class="food-list food-list-hook">
					<h1 class="title">{{index.name}}</h1>
					<ul>
						<li v-for="food in index.foods" class="food-item border-1px">
							<div class="icon">
								<img width="57" height="57" :src="food.icon">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
                  					<span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                				</div>
                				<div class="price">
                					<span class="new">￥{{food.price}}</span><span class="old" style="margin-left:5px;">￥{{food.oldPrice}}</span>
                				</div>
                				<div class="cartcontrol-wrapper">
                				</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import {getseller} from 'api/app';
  export const ERR_OK = 0;
  export default {
	data() {
		return {
			data: [],
			goods: [],
			listHeight: [],
			scrollY: 0,
			selectedFood: {}
			
		}
	},
	computed: {
		currentIndex() {
			for(let i = 0; i < this.listHeight.length; i++) {
				let height1 = this.listHeight[i];
				let height2 = this.listHeight[i + 1];
				
                if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                return i;
                }
			}
            return 0;
		}
	},
	created() {
		getseller().then((res) => {
			this.goods = res.goods;
			this.$nextTick(() => {
             	this.meunScroll = new BScroll(this.$els.menuWrapper, {
             		click: true  //取消默认阻止事件
             	});
            	this.foodScroll = new BScroll(this.$els.foodsWrapper, {
          			click: true, //取消默认阻止事件
          			probeType: 3  //监听事件的触发时间，1为即时触发，3监听时实滚动的位置为延迟到事件完毕后触发            		
            	});
            	this.foodScroll.on('scroll', (pos) => { //监听事件scroll
            		this.scrollY = Math.abs(Math.round(pos.y));
            	});
            	this._calculateHeight();
            	
            });
		})
	},
	methods: {
		_calculateHeight() {
			//这里获取li的高度
			let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
			let height = 0;
			this.listHeight.push(height);
			for (let i = 0; i < foodList.length; i++){
				let item = foodList[i];
				height += item.clientHeight;
				this.listHeight.push(height);
			}
		}
	}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 54px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 58px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: inline-block
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
         flex: 1
         .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
         .desc, .extra
          line-height: 10px
          font-size: 12px
          color: rgb(147, 153, 157)
         .desc
          line-height: 12px
          margin-bottom: 8px
         .extra
           .count
            margin-right: 12px
         .price
           font-weight: 700
           line-height: 24px
          .new
           margin-right: 8px
           font-size: 14px
           color: rgb(240, 20, 20)
          .old
           text-decoration: line-through
           font-size: 10px
           color: rgb(147, 153, 159)
</style>