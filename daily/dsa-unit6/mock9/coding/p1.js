
    function deleteMid(head)
    {
        if (head == null)
            return null;
        if (head.next == null) {
            return null;
        }
        let copyHead = head;
 
 
        var mid = parseInt(n / 2);
 
        while (mid-- > 1) {
            head = head.next;
        }
 
        head.next = head.next.next;
 
        console.log(copyHead); 
    }