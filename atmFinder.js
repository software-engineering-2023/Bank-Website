function showCustomMap(elementId) {
    // Get the map iframe element
    var mapFrame = document.getElementById('mapFrame');
    var url = "";
    if(elementId == 1)
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220517.28613173313!2d31.462564886718734!3d30.277472000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fdb0a207b82b%3A0x209bed5ce396e4b2!2sCIB%20-%20Commercial%20International%20Bank!5e0!3m2!1sen!2seg!4v1685321934333!5m2!1sen!2seg";
    else if(elementId == 2)
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4446186676046!2d31.235410424083366!3d30.024099719536977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847378a767335%3A0x48de3b2f36b35296!2sAtm%20ciB!5e0!3m2!1sen!2seg!4v1685322668853!5m2!1sen!2seg";
    else if(elementId == 3)
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13824.461080018435!2d30.926470756530776!3d29.976117103760895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856f852e15739%3A0x44dcecacc324a99e!2sCIB!5e0!3m2!1sen!2seg!4v1685322754843!5m2!1sen!2seg";
    else if(elementId == 4)
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2911404477422!2d31.335062674084927!3d30.057188117969407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e65c5c6db47%3A0x2c969f8f37177822!2sCIB%20-%20Commercial%20International%20Bank!5e0!3m2!1sen!2seg!4v1685322796981!5m2!1sen!2seg";
    else if(elementId == 5)
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110504.89983973019!2d31.255234379388696!3d30.057561431147175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815db1a20f275%3A0x370c3de113a88a31!2sCommercial%20International%20Bank!5e0!3m2!1sen!2seg!4v1685322850510!5m2!1sen!2seg";
    mapFrame.src = url;
}

