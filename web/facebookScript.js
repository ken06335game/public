
		  window . fbAsyncInit =  function ()  { 
		  console.log( "a");
			FB . init ({ 
			  appId       :  '144249525918998' , 
			  xfbml       :  true , 
			  version     :  'v2.4' 
			}); 
		  };

		  ( function ( d , s , id ){ 
		  		  console.log( "b");
			 var js , fjs = d . getElementsByTagName ( s )[ 0 ]; 
			 if  ( d . getElementById ( id ))  { return ;} 
			 js = d . createElement ( s ); js . id = id ; 
			 js . src =  "//connect.facebook.net/en_US/sdk.js" ; 
			 fjs . parentNode . insertBefore ( js , fjs ); 
		   }( document ,  'script' ,  'facebook-jssdk' )); 
		   
		   
		   
<!--
		function BrowserLog( msg)
		{
			// logthe message
			console.log( msg);
			// alert( msg );
			
			FB . ui ( 
			 { 
			  method :  'share' , 
			  href :  'https://developers.facebook.com/docs/' 
			},  function ( response ){});
			
		}
-->