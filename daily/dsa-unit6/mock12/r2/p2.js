const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var sortBinaryList = function (head) {
  if (head == null || head.next == null) {
    return;
  }
  var cnt0 = 0;

  var cnt1 = 0;
  var my_temp = head;
  while (my_temp != null) {

    if (my_temp.data == 0) {
      cnt0++;
    } else {
      cnt1++;
    }


    my_temp = my_temp.next;
  }
  my_temp = head;



  while (cnt0 > 0) {
    my_temp.data = 0;
    my_temp = my_temp.next;
    cnt0--;
    
  }
    while (cnt1 > 0) {
    my_temp.data = 1;
    my_temp = my_temp.next;
    cnt1--;
  }

  return head;
};