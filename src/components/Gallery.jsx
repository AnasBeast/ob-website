import { useState } from "react";
import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "./images/345259354_157820967166393_6053483022018548015_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/345259354_157820967166393_6053483022018548015_n.jpg", width: 400, height: 300 },
            { src: "./images/345259354_157820967166393_6053483022018548015_n.jpg", width: 200, height: 150 }
        ]
    },
    {
        src: "./images/345245136_3337769083204110_7607833976450672164_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/345245136_3337769083204110_7607833976450672164_n.jpg", width: 800, height: 450 },
            { src: "./images/345245136_3337769083204110_7607833976450672164_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/345238888_817625689972577_2882098066106626658_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/345238888_817625689972577_2882098066106626658_n.jpg", width: 800, height: 450 },
            { src: "./images/345238888_817625689972577_2882098066106626658_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/350898020_215619307992257_2464222061411946610_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/350898020_215619307992257_2464222061411946610_n.jpg", width: 800, height: 450 },
            { src: "./images/350898020_215619307992257_2464222061411946610_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352348525_1496388394522540_1352769069686901879_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/352348525_1496388394522540_1352769069686901879_n.jpg", width: 800, height: 450 },
            { src: "./images/352348525_1496388394522540_1352769069686901879_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352449428_257955653488495_2799109064141824871_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352449428_257955653488495_2799109064141824871_n.jpg", width: 800, height: 450 },
            { src: "./images/352449428_257955653488495_2799109064141824871_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352608905_1278174109455699_2020817183704221075_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352608905_1278174109455699_2020817183704221075_n.jpg", width: 800, height: 450 },
            { src: "./images/352608905_1278174109455699_2020817183704221075_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352812878_660518992757417_3130436245772768654_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/352812878_660518992757417_3130436245772768654_n.jpg", width: 800, height: 450 },
            { src: "./images/352812878_660518992757417_3130436245772768654_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/350796497_3601945120035766_7401487267498546984_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/350796497_3601945120035766_7401487267498546984_n.jpg", width: 800, height: 450 },
            { src: "./images/350796497_3601945120035766_7401487267498546984_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/350825493_1935674946803088_623220939638263914_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/350825493_1935674946803088_623220939638263914_n.jpg", width: 800, height: 450 },
            { src: "./images/350825493_1935674946803088_623220939638263914_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg", width: 800, height: 450 },
            { src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/345259354_612506880834803_4342608697364029960_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/345259354_612506880834803_4342608697364029960_n.jpg", width: 800, height: 450 },
            { src: "./images/345259354_612506880834803_4342608697364029960_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/345259469_6255734951161503_4072075062336795370_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/345259469_6255734951161503_4072075062336795370_n.jpg", width: 800, height: 450 },
            { src: "./images/345259469_6255734951161503_4072075062336795370_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/345264813_121345820977270_7109951677911314962_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/345264813_121345820977270_7109951677911314962_n.jpg", width: 800, height: 450 },
            { src: "./images/345264813_121345820977270_7109951677911314962_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/345290589_6421056197938278_853329895494082263_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/345290589_6421056197938278_853329895494082263_n.jpg", width: 800, height: 450 },
            { src: "./images/345290589_6421056197938278_853329895494082263_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/348359302_840090926967635_7670146163475493589_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/348359302_840090926967635_7670146163475493589_n.jpg", width: 800, height: 450 },
            { src: "./images/348359302_840090926967635_7670146163475493589_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/348362167_183400581342093_6886484881207753101_n.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "./images/348362167_183400581342093_6886484881207753101_n.jpg", width: 800, height: 450 },
            { src: "./images/348362167_183400581342093_6886484881207753101_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/350310958_957158885478034_7957613564033772739_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/350310958_957158885478034_7957613564033772739_n.jpg", width: 800, height: 450 },
            { src: "./images/350310958_957158885478034_7957613564033772739_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/350240254_961084771659529_8689880670376866321_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/350240254_961084771659529_8689880670376866321_n.jpg", width: 800, height: 450 },
            { src: "./images/350240254_961084771659529_8689880670376866321_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/341820112_750497876760293_8774831947979839201_n1.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/341820112_750497876760293_8774831947979839201_n1.jpg", width: 800, height: 450 },
            { src: "./images/341820112_750497876760293_8774831947979839201_n1.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/equipetop.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/equipetop.jpg", width: 800, height: 450 },
            { src: "./images/equipetop.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/historique.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/historique.jpg", width: 800, height: 450 },
            { src: "./images/historique.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/historique2.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/historique2.jpg", width: 800, height: 450 },
            { src: "./images/historique2.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352838896_809658137187022_9022852991996692461_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352838896_809658137187022_9022852991996692461_n.jpg", width: 800, height: 450 },
            { src: "./images/352838896_809658137187022_9022852991996692461_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg", width: 800, height: 450 },
            { src: "./images/352861352_1684901001958632_2426660211580215384_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352816057_807734004046171_1842482690793094891_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352816057_807734004046171_1842482690793094891_n.jpg", width: 800, height: 450 },
            { src: "./images/352816057_807734004046171_1842482690793094891_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352812878_660518992757417_3130436245772768654_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352812878_660518992757417_3130436245772768654_n.jpg", width: 800, height: 450 },
            { src: "./images/352812878_660518992757417_3130436245772768654_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/351351633_807166640628824_6187300263677212993_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/351351633_807166640628824_6187300263677212993_n.jpg", width: 800, height: 450 },
            { src: "./images/351351633_807166640628824_6187300263677212993_n.jpg", width: 400, height: 225 }
        ]
    },
    {
        src: "./images/352592457_3394035300851059_1118928274197224191_n.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "./images/352592457_3394035300851059_1118928274197224191_n.jpg", width: 800, height: 450 },
            { src: "./images/352592457_3394035300851059_1118928274197224191_n.jpg", width: 400, height: 225 }
        ]
    }
];

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [imgUrl , setImgUrl] = useState("./images/352592457_3394035300851059_1118928274197224191_n.jpg")
    function openLightbox(index){
        setImgUrl(photos[index].src)
        setShowModal(true)
    }
    return (
        <>
            <PhotoAlbum layout="columns" photos={photos} onClick={({ index }) => {openLightbox(index);}}/>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">


                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <img src={imgUrl} alt="" />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}