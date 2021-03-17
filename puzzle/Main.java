
class Main {
    public static void main(String[] args) {
        int[][] mock = { { 1, 2, 3 }, { 4, 5, 6, 9 }, { 7 }, };
        Boards board = new Boards(mock);
        System.out.println(board.toString());
    }
}