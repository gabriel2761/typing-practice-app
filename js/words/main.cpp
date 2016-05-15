#include <iostream>
#include <list>
#include <fstream>
using namespace std;

int main(int argc, char * argv[])
{
    ifstream fin(argv[1]);
    ofstream fout("output.js");

    list<string> one;
    list<string> two;
    list<string> three;
    list<string> four;
    list<string> five;
    list<string> six;
    list<string> seven;
    list<string> eight;
    list<string> nine;
    list<string> ten;
    list<string> eleven;
    list<string> twelve;
    list<string> thirteen;
    list<string> fourteen;
    list<string> fifteen;
    list<string> sixteen;
    list<string> seventeen;
    list<string> eighteen;
    list<string> nineteen;

    int largest = 0;
    string word;
    char c;
    while (fin.get(c))
    {
        if (isspace(c))
        {
            if (word.size() == 2) two.push_back(word);
            if (word.size() == 3) three.push_back(word);
            if (word.size() == 4) four.push_back(word);
            if (word.size() == 5) five.push_back(word);
            if (word.size() == 6) six.push_back(word);
            if (word.size() == 7) seven.push_back(word);
            if (word.size() == 8) eight.push_back(word);
            if (word.size() == 9) nine.push_back(word);
            if (word.size() == 10) ten.push_back(word);
            if (word.size() == 11) eleven.push_back(word);
            if (word.size() == 12) twelve.push_back(word);
            if (word.size() == 13) thirteen.push_back(word);
            if (word.size() == 14) fourteen.push_back(word);

            word = "";
        }
        else
        {
            word += c;
        }
    }

    list<string>::iterator itr;

    int count = 0;
    fout << "var two = \"";
    for (itr = two.begin(); itr != two.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 500)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var three = \"";
    for (itr = three.begin(); itr != three.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr << " ";
        if (count > 450)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var four = \"";
    for (itr = four.begin(); itr != four.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var five = \"";
    for (itr = five.begin(); itr != five.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var six = \"";
    for (itr = six.begin(); itr != six.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var seven = \"";
    for (itr = seven.begin(); itr != seven.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var eight = \"";
    for (itr = eight.begin(); itr != eight.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var nine = \"";
    for (itr = nine.begin(); itr != nine.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var ten = \"";
    for (itr = ten.begin(); itr != ten.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var eleven = \"";
    for (itr = eleven.begin(); itr != eleven.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var twelve = \"";
    for (itr = twelve.begin(); itr != twelve.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var thirteen = \"";
    for (itr = thirteen.begin(); itr != thirteen.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    count = 0;
    fout << "var fourteen = \"";
    for (itr = fourteen.begin(); itr != fourteen.end(); ++itr)
    {
        count += (* itr).size();
        fout << * itr;
        if (count > 600)
        {
            fout << "\" +\n    \"";
            count = 0;
        }
        else
        {
            fout << " ";
        }
    }
    fout << "\";\n\n";

    fout.close();
    fin.close();

    return 0;
}