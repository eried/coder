/**
 * Coder for Raspberry Pi
 * A simple platform for experimenting with web stuff.
 * http://g.co/coder
 *
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Coder = {
    coderlib_url: "/app/coderlib",
    appname: '',
    appurl: '',
    
    listApps: function( callback ) {
        $.get( Coder.coderlib_url + "/api/app/list", function(data){
            callback( data.apps );
        });
    },

    addBasicNav: function( ) {
        $(document).ready( function() {
            //ignore this menu if we're in the editor
            if ( window.location.href.match(/\?ineditor/) ) {
                return;
            }
            
            var navhtml = '<div id="coder_basicnav"><div class="coder_home"><a href="/app/coder/">Coder</a></div><div class="coder_editbutton">&lt;/&gt;</div></div>';
            var $nav = $(navhtml);
            $('body').find('#coder_basicnav').remove();
            $('body').append( $nav );
            $nav.find('.coder_editbutton').click(function() {
                window.location.href= '/app/editor/edit/' + Coder.appname;
            });
        });
    },
};

if ( typeof appname != 'nothing' ) {
    Coder.appname = appname;
}
if ( typeof appurl != 'nothing' ) {
    Coder.appurl = appurl;
}