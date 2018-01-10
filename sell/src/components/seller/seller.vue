<template>
	<div class="seller" v-el:seller>
		<div class="content-wrapper" >
		   <span class="text">1111111</span>
		</div>
	</div>
</template>
<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.seller
	 position:relative
	 overflow:hidden
	 color:#ffffff
	 background: rgba(7, 17, 27, 0.5)
	 .content-wrapper
	  padding: 24px 12px 18px 24px
</style>