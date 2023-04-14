let students = [
    {name: 'Rahul Chandel', Maths: 50, computer: 79},
    {name: 'Rohini Manhas', Maths: 40, computer: 69},
    {name: 'Ankush Katoch', Maths: 50, computer: 79},
    {name: 'Kuldeep singh', Maths: 50, computer: 79},
    {name: 'Akash Baloria', Maths: 50, computer: 79},
    {name: 'Shivani Chandel', Maths: 50, computer: 79},
    {name: 'Shivali Kotwal', Maths: 50, computer: 79},
    {name: 'Vikas', Maths: 50, computer: 79},
    ]
    function showData(){
        let arr = students.map(function(ele){
            let str = '<tr>';
                str+= '<td class=\'td\'>' + ele.name + '</td>';
                str+= '<td class=\'td\'>' + ele.Maths + '</td>';
                str+= '<td class=\'td\'>' + ele.computer + '</td>';
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