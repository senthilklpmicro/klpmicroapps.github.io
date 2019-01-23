// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Applications for Android by KLP Micro Systems", "KLP Micro Systems, WiFi Utility, WiFi Links, WiFi Connector, WiFi Connection Manager, Android, Access Point, WiFi Network, WiFi Linker, WiFi Linker, Linker WiFi, Best WiFi, Channels, WiFi Best, Best Channels, Advised APs, Advised Channels ", "");
   this[database_length++] = new SearchPage("wifilinker.html", "WiFi Linker for Android by KLP Micro Systems", "KLP Micro Systems, WiFi Utility, WiFi Links, WiFi Connector, WiFi Connection Manager, Android, Access Point, WiFi Network, WiFi Linker, WiFi Linker, Linker WiFi, Best WiFi, Channels, WiFi Best, Best Channels, Advised APs, Advised Channels ", "");
   this[database_length++] = new SearchPage("contact.html", "Contact KLP Micro Systems", "KLP Micro Systems, WiFi Utility, WiFi Links, WiFi Connector, WiFi Connection Manager, Android, Access Point, WiFi Network, Contact KLP, KLP Contact, contact@klpmicrosystems.com, senthil.klpmicro@gmail.com ", "");
   this[database_length++] = new SearchPage("about.html", "About KLP Micro Systems", "KLP Micro Systems, WiFi Utility, WiFi Links, WiFi Connector, WiFi Connection Manager, Android, Access Point, WiFi Network, Contact KLP, KLP Contact, contact@klpmicrosystems.com, senthil.klpmicro@gmail.com, about klp micro systems ", "");
   return this;
}
