/* * jQuery Robotext - v1.0 * http://github.com/outofroutine/jQuery-Robotext/ * * Written by TAMER AYDIN - http://tamerayd.in * * This work is licensed under the Creative Commons Attribution 3.0 Unported License. * To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/ * or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA. */(function($) {    $.robotext = function(element, options) {        var defaults = {            cursor: true,			flashfrequency : 200,			speed : 40        }        var plugin = this;        plugin.settings = {}        var $element = $(element),        element = element;			        plugin.init = function() {		            plugin.settings = $.extend({}, defaults, options);            $element.html('');			printChar(0);			        }				var text = $element.text().split('');				var trigger;				var printChar = function(i) {			clearInterval(trigger);			if (text[i] != undefined) {				var html = $element.html();				$element.html(html);				if (plugin.settings.cursor===true) {					var htmlSubs = html.substring(0, html.length - 1);					trigger = setInterval(function() {$element.html(htmlSubs+text[i]+'_');i++;printChar(i);},plugin.settings.speed);				} else {					trigger = setInterval(function() {$element.html(html+text[i]);i++;printChar(i);},plugin.settings.speed);				}			} else if (plugin.settings.cursor===true) {				text = $element.text().split('');				text.pop();				text = text.join('');				trigger = setInterval(function() {cursorFlash($element,text,1);}, plugin.settings.flashfrequency);			} else {				var html = $element.html();				if (plugin.settings.cursor===true)					html = html.substring(0, html.length - 1);				$element.html(html);			}		}		        var cursorFlash = function(element,text,add) {            element.html(text.toString());			clearInterval(trigger);			trigger = setInterval(function() {				var textarray = text.split('');				if (add == 1) {					textarray.push("_");					$add = 0;				} else {					textarray.pop();					$add = 1;				}				var text2 = textarray.join('');				cursorFlash(element,text2,$add);			}, plugin.settings.flashfrequency);        }		        plugin.init();    }    $.fn.robotext = function(options) {        return this.each(function() {            if (undefined == $(this).data('robotext')) {                var plugin = new $.robotext(this, options);                $(this).data('robotext', plugin);            }        });    }})(jQuery);