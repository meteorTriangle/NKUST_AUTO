var c = document.getElementsByTagName('input');
for (let index = 0; index < c.length; index++) {
    if (c[index].type === 'radio') {
	if(c[index].id.startsWith('1')){
	    if(c[index].id.endsWith('1')) {
            	c[index].click();
            }
	}else if(c[index].id.startsWith('23')){
	    if(c[index].id.endsWith('1')) {
            	c[index].click();
            }
	}else if(c[index].id.startsWith('24')){
	    if(c[index].id.endsWith('1')) {
            	c[index].click();
            }
	}else if(c[index].id.endsWith('5')) {
            	c[index].click();
            }
        
    }
}
var d = document.getElementById('81_6');
d.click();
