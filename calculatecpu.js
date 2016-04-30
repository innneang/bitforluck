    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
        $( document ).on('click keyup change' ,function() {
             var cards = new Array;
            var amountxxx =new Array;
            $('.cards').each(function( index ){
               cards.push(parseInt($(this).val()));
            });
            $('.amount').each(function( index ){
               amountxxx.push(parseInt($(this).val()));
            });
            var sum = 0;
            for(var i=0; i< cards.length; i++) {
                sum += cards[i]*amountxxx[i];
            }
            var tdp = parseInt(sum) + parseInt($('#other').val()) + parseInt($('#harddriveo').val()) + parseInt($('#mainboardo').val());
            var perunit = $('#kafaiperunit').val();
            var perunit250 = $('#kafaiperunit250').val();
            var perunit400 = $('#kafaiperunit400').val();
            var hourperday = $('#hourperday').val();
            var amount = $('#amount').val();
            var fts = $('#ft').val();
            var ft = fts/100;
            var unitperday = tdp*hourperday*amount/1000;
            var unitbase = $('#unitbase').val();
            var unitpermonthx = unitperday*30;
            var unitpermonth = parseInt(unitpermonthx) + parseInt(unitbase);
            var ftpermonth = ft*unitperday*30;
            $('#showtdp').text(tdp.toString().concat('วัตต์'));
            $('#showunitperday').text(unitperday.toString().concat('ยูนิต'));
            $('#showunitpermonth').text(unitpermonth.toString().concat('ยูนิต'));
            $('#showft').text(ftpermonth.toString().concat('บาท'));
            if(unitpermonth <= 150){
                $('#yesornot').text('ค่าไฟน้อยกว่า 150 ยูนิตต่อเดือน');
                var result = (((unitpermonth*perunit)-ft)+38.22)*1.07;
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((unitpermonth*perunit)-ft)*0.07).toFixed(2));
                
            }
            else if(unitpermonth >=250 && unitpermonth <400){
                $('#yesornot').text('ค่าไฟมากกว่า 250 ยูนิตต่อเดือน');
                var result = (((unitpermonth*perunit)-ft)+38.22)*1.07;
                var above150 = unitpermonth-150;
                var result = (150*perunit + 4.2218*above150) - ft;
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((unitpermonth*perunit)-ft)*0.07).toFixed(2));
            }
            else if(unitpermonth >=400){
                $('#yesornot').text('ค่าไฟมากกว่า 400 ยูนิตต่อเดือน');
                var above400 = unitpermonth-400;
                var result = (((150*perunit + perunit250*250 + perunit400*above400) - ft)+38.22)*1.07;
                console.log(perunit);
                $('.result').text(parseFloat(result).toFixed(2));
                $('.resultperday').text(parseFloat(result/30).toFixed(2));
                $('.resultperweek').text(parseFloat(result/4.285714286).toFixed(2));
                $('.resultperyear').text(parseFloat(result*12).toFixed(2));
                $('#tax').text(parseFloat(((150*perunit + perunit250*250 + perunit400*above400) - ft)*0.07).toFixed(2));
            }
            
           
            
        });

    $('#addappend').on('click', function(){
        var appendthisthing = ` 
                        <div class='addedappended'>
                    <div class='col-md-6'>
                        <select id='card' class="cards form-control">
                            <option disabled selected>รุ่น CPU</option>
                            <option disabled>Intel Haswell T CPUs</option>
                            <option value='35'>i3-4130T</option>
                            <option value='35'>i3-4150T</option>
                            <option value='35'>i3-4160T</option>
                            <option value='35'>i3-4330T</option>
                            <option value='35'>i3-4350T</option>
                            <option value='35'>i3-4360T</option>
                            <option value='35'>i5-4460T</option>
                            <option value='35'>i5-4570T</option>
                            <option value='35'>i5-4590T</option>
                            <option value='45'>i5-4670T</option>
                            <option value='45'>i5-4690T</option>
                            <option value='35'>i7-4765T</option>
                            <option value='45'>i7-4770T</option>
                            <option value='35'>i7-4785T</option>
                            <option value='45'>i7-4790T</option>
                            <option disabled>Intel Haswell S CPUs</option>
                            <option value='65'>i5-4430S</option>
                            <option value='65'>i5-4460S</option>
                            <option value='65'>i5-4570S</option>
                            <option value='65'>i5-4590S</option>
                            <option value='65'>i5-4670S</option>
                            <option value='65'>i5-4690S</option>
                            <option value='65'>i7-4770S</option>
                            <option value='65'>i7-4790S</option>
                        </select>
                    </div>
                    <div class='col-md-6'>
                        <div class='form-group'>
                            <div class="input-group">
                                <input type="text" class="form-control amount" id="amount" placeholder="จำนวนการ์ดจอ">
                                <div class="input-group-addon">ใบ</div><div class="removeappend input-group-addon"><span class='glyphicon glyphicon-minus'></span></div>
                            </div>
                        </div>
                    </div>
                `
$('.addtothis').append(appendthisthing);
    });

$( document).on("click", ".removeappend",function() {
      $(this).closest('.addedappended').remove();
});
