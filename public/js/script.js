// const btn = $('.btn');
// // console.log(btn);
// btn.on('click', (ev) => {
//     console.log(ev);
// })
// $(()=>{
//     const form=$(.)
// });
const form = $('.form');
const inp = $('.inp');
const commentlist = $('.commentList');

let addCommentstoList = (data) => {
    let str = ``;
    data.forEach(element => {
        str += `<div> ${element} </div>`;
    });
    commentlist.html(str);
    inp.val("");
}

form.on('submit', (ev) => {
    ev.preventDefault();
    // console.log(ev.target);
    let inpValue = inp.val();
    // let _id = $('#postId').attr('value');
    let _id = inp.attr('value');
    console.log(_id);
    // console.log(inpValue);

    // $.post('/posts/addcomment', {
    //     comment: inpValue,
    //     _id
    // })
    //     .done((data) => {
    //         // console.log(data);
    //         addCommentstoList(data);
    //         // console.log()
    //     })
    //     .fail((err) => {
    //         console.log("Error Agaya Bhai Comment Add M");
    //     })
});