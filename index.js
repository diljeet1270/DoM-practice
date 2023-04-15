let students = [
    {name: 'Rahul Chandel', Maths: 82, computer: 88},
    {name: 'Rohini Manhas', Maths: 44, computer: 55},
    {name: 'Ankush Katoch', Maths: 91, computer: 73},
    {name: 'Kuldeep singh', Maths: 60, computer: 89},
    {name: 'Akash Baloria', Maths: 58, computer: 60},
    {name: 'Shivani Chandel', Maths: 42, computer: 47},
    {name: 'Shivali Kotwal', Maths: 50, computer: 79},
    {name: 'Vikas', Maths: 50, computer: 79},
    ]
    let highlightMarks = false;
    function showData(){
        let arr = students.map(function(ele){
            let str = '<tr>';
                str+= '<td class=\'td\'>' + ele.name + '</td>';
                str+= '<td class=\''+getClassMarks(ele.Maths)+'\'>' + ele.Maths + '</td>';
                str+= '<td class=\''+getClassMarks(ele.computer)+'\'>' + ele.computer + '</td>';
                str+= '</tr>'
                return str;
        });
        let header = '<tr>'
            header+= '<th class=\'th\'>Name</th>'
            header+= '<th class=\'th\'>Maths</th>'
            header+= '<th class=\'th\'>Computer</th>'
            header+= '</tr>'
            let html = '<table class=\'table\'>'+header + arr.join('')+'</table>';
            let element = document.getElementById('data');
            element.innerHTML = html;
    }
    function getClassMarks(marks){
        if(marks>=75 && highlightMarks)
            return 'td score70'
        else if(marks<=50 && highlightMarks)
            return 'td score50'
        else
            return 'td'
    }
    function highMarks(){
        highlightMarks = true;
        showData();
    }