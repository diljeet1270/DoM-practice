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
    let highlightStudents = false;
    function showData(){
        let arr = students.map(function(ele){
            let str = '<tr class = \''+getClassStudents(ele)+'\'>';
                str+= '<td class=\'td\'>' + ele.name + '</td>';
                str+= '<td class=\''+getClassMarks(ele.Maths)+'\'>' + ele.Maths + '</td>';
                str+= '<td class=\''+getClassMarks(ele.computer)+'\'>' + ele.computer + '</td>';
                str+= '</tr>'
                return str;
        });
        let header = '<tr>'
            header+= '<th class=\'th\' onclick=\'sort(0)\'>Name</th>'
            header+= '<th class=\'th\' onclick=\'sort(1)\'>Maths</th>'
            header+= '<th class=\'th\' onclick=\'sort(2)\'>Computer</th>'
            header+= '</tr>'
            let html = '<table class=\'table\'>'+header + arr.join('')+'</table>';
            let element = document.getElementById('data');
            element.innerHTML = html;
    }
    function getClassStudents(st){
        let total = st.Maths + st.computer;
        if(total >= 150 && highlightStudents)
            return 'total150'
        else if(total <= 100 && highlightStudents)
            return 'total100'
        else
            return '';
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
    function highStudents(){
        highlightStudents = true;
        highlightMarks = false;
        showData();
    }
    function clearStyles(){
        highlightStudents = false;
        highlightMarks = false;
        showData();
    }
    function sort(colNum){
        if(colNum == 0){
            students.sort(sortName)
        }
        else if(colNum==1)
            students.sort(sortMaths)
        else
            students.sort(sortComputer);
        showData();
    }
    function sortName(name1, name2){
        return name1.name.localeCompare(name2.name)
    }
    function sortMaths(mark1, marks2){
        return mark1.Maths-marks2.Maths;
    }
    function sortComputer(mark1, marks2){
        return mark1.computer-marks2.computer;
    }