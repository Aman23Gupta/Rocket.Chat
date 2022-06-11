function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/index.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Image;
module.link("../components/Image", {
  default(v) {
    Image = v;
  }

}, 0);
let Attachment;
module.link("./Attachment", {
  default(v) {
    Attachment = v;
  }

}, 1);
let Author;
module.link("./Author", {
  default(v) {
    Author = v;
  }

}, 2);
let AuthorAvatar;
module.link("./AuthorAvatar", {
  default(v) {
    AuthorAvatar = v;
  }

}, 3);
let AuthorName;
module.link("./AuthorName", {
  default(v) {
    AuthorName = v;
  }

}, 4);
let Block;
module.link("./Block", {
  default(v) {
    Block = v;
  }

}, 5);
let Collapse;
module.link("./Collapse", {
  default(v) {
    Collapse = v;
  }

}, 6);
let Content;
module.link("./Content", {
  default(v) {
    Content = v;
  }

}, 7);
let Details;
module.link("./Details", {
  default(v) {
    Details = v;
  }

}, 8);
let Download;
module.link("./Download", {
  default(v) {
    Download = v;
  }

}, 9);
let Inner;
module.link("./Inner", {
  default(v) {
    Inner = v;
  }

}, 10);
let Row;
module.link("./Row", {
  default(v) {
    Row = v;
  }

}, 11);
let Size;
module.link("./Size", {
  default(v) {
    Size = v;
  }

}, 12);
let Text;
module.link("./Text", {
  default(v) {
    Text = v;
  }

}, 13);
let Thumb;
module.link("./Thumb", {
  default(v) {
    Thumb = v;
  }

}, 14);
let Title;
module.link("./Title", {
  default(v) {
    Title = v;
  }

}, 15);
let TitleLink;
module.link("./TitleLink", {
  default(v) {
    TitleLink = v;
  }

}, 16);
module.exportDefault(Object.assign(Attachment, {
  Image,
  Row,
  Title,
  Text,
  TitleLink,
  Size,
  Thumb,
  Collapse,
  Download,
  Content,
  Details,
  Inner,
  Block,
  Author,
  AuthorAvatar,
  AuthorName
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/8a75a6ba6cab04e2415d0ae99ff7d26efbb14355.map
