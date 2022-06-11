function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/index.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Image;
module.link("../components/Image", {
  "default": function (v) {
    Image = v;
  }
}, 0);
var Attachment;
module.link("./Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 1);
var Author;
module.link("./Author", {
  "default": function (v) {
    Author = v;
  }
}, 2);
var AuthorAvatar;
module.link("./AuthorAvatar", {
  "default": function (v) {
    AuthorAvatar = v;
  }
}, 3);
var AuthorName;
module.link("./AuthorName", {
  "default": function (v) {
    AuthorName = v;
  }
}, 4);
var Block;
module.link("./Block", {
  "default": function (v) {
    Block = v;
  }
}, 5);
var Collapse;
module.link("./Collapse", {
  "default": function (v) {
    Collapse = v;
  }
}, 6);
var Content;
module.link("./Content", {
  "default": function (v) {
    Content = v;
  }
}, 7);
var Details;
module.link("./Details", {
  "default": function (v) {
    Details = v;
  }
}, 8);
var Download;
module.link("./Download", {
  "default": function (v) {
    Download = v;
  }
}, 9);
var Inner;
module.link("./Inner", {
  "default": function (v) {
    Inner = v;
  }
}, 10);
var Row;
module.link("./Row", {
  "default": function (v) {
    Row = v;
  }
}, 11);
var Size;
module.link("./Size", {
  "default": function (v) {
    Size = v;
  }
}, 12);
var Text;
module.link("./Text", {
  "default": function (v) {
    Text = v;
  }
}, 13);
var Thumb;
module.link("./Thumb", {
  "default": function (v) {
    Thumb = v;
  }
}, 14);
var Title;
module.link("./Title", {
  "default": function (v) {
    Title = v;
  }
}, 15);
var TitleLink;
module.link("./TitleLink", {
  "default": function (v) {
    TitleLink = v;
  }
}, 16);
module.exportDefault(Object.assign(Attachment, {
  Image: Image,
  Row: Row,
  Title: Title,
  Text: Text,
  TitleLink: TitleLink,
  Size: Size,
  Thumb: Thumb,
  Collapse: Collapse,
  Download: Download,
  Content: Content,
  Details: Details,
  Inner: Inner,
  Block: Block,
  Author: Author,
  AuthorAvatar: AuthorAvatar,
  AuthorName: AuthorName
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/73218da112cf919a7900d1cdf45de8ce205162ab.map
